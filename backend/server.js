const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(
  {
    origin:'http://localhost:3000',
    credentials:true
  }
));

app.use(
  session({
    secret: 'ec70dcedc7658182eab591f81111a49efb8c6737b4e7e7df61b5ac835ab920ec',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false, // Set to true if using HTTPS
      sameSite: 'lax',
    },
  })
);


const db = mysql.createConnection({
    host: process.env.DB_HOST,     // Add credentials to .env
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  });

  db.connect(err => {
    if (err) {
      console.error('Database connection failed:', err.message);
      return;
    }
    console.log('Connected to MySQL database');
  });

  app.get('/api/students', (req, res) => {
    db.query('SELECT * FROM students', (err, results) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Database query failed' });
      } else {
        res.json(results);
      }
    });
  });
  
  // Signup API
app.post('/api/students/signup', async (req, res) => {
  const {
    name,
    email,
    password,
    university_id,
    degree_program,
    graduation_year,
    profile_summary,
    cgpa,
    referral,
    endorsements,
    achievements,
  } = req.body;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into database
    const query = `INSERT INTO Students (
      name, email, password_hash, university_id, degree_program, graduation_year, 
      profile_summary, cgpa, referral, endorsements, achievements
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(
      query,
      [
        name,
        email,
        hashedPassword,
        university_id,
        degree_program,
        graduation_year,
        profile_summary,
        cgpa,
        referral,
        endorsements,
        achievements,
      ],
      (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Error creating user' });
        }
        res.status(201).json({ message: 'User created successfully' });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Signin API
app.post('/api/students/signin', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM Students WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = results[0];

    // Compare password
    const passwordMatch = await bcrypt.compare(password, user.password_hash);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Create session
    req.session.userId = user.student_id;
    req.session.save();
    console.log('Session created:', req.session);
    res.status(200).json({ message: 'Login successful', user: { id: user.student_id, name: user.name } });
  });
});

// Logout API
app.post('/api/students/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error logging out' });
    }
    res.status(200).json({ message: 'Logged out successfully' });
  });
});

app.get('/api/students/profile', async (req, res) => {
  try {
    const query = `
     SELECT 
    Students.name AS student_name, 
    Students.email, 
    Students.university_id, 
    Students.degree_program, 
    Students.graduation_year, 
    Students.profile_summary, 
    Students.cgpa, 
    Students.referral, 
    Students.endorsements, 
    Students.achievements, 
    Universities.name AS university_name
FROM 
    Students
LEFT JOIN 
    Universities ON Students.university_id = Universities.university_id
WHERE 
    Students.student_id = ?`;


    // Use the existing `db` connection
    db.query(query, [req.session.userId], (err, results) => {
      if (err) {
        console.error('Error fetching profile:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(results[0]);
    });
  } catch (error) {
    console.error('Unexpected error fetching profile:', error);
    res.status(500).json({ error: 'Unexpected Internal Server Error' });
  }
});


app.get('/api/students/auth/status', (req, res) => {
  console.log('Session on status check:', req.session);
  if (req.session.userId) {
    res.status(200).json({ isAuthenticated: true, user: { id: req.session.userId } });
  } else {
    res.status(200).json({ isAuthenticated: false });
  }
});


//Employers api's

app.post('/api/employers/signup', (req,res)=> {
  const [name,email,role,hashed_password,company_name,location,compyany_summary,website_url,industry,contact_email] = req.body;
  try {
    //hash password
    const hashed_password = await
  }
  
})



  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
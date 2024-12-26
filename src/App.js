import {Home} from "./pages/home";
import Students from "./pages/Students/students"
import Employers from "./pages/Employers/employers";
import { Universities } from "./pages/universities";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignupPage from "./pages/Students/signup";
import SigninPage from "./pages/Students/signin";
import ProfilePage from "./pages/Students/profile";
import EmployerSignup from "./pages/Employers/signup";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Students" element ={<Students />} />
          <Route path="/Employers" element = {<Employers/>} />
          <Route path="/Universities" element = {<Universities />} />
          <Route path="/Students/Signup" element={<SignupPage />} />
          <Route path="/Students/Signin" element={<SigninPage />} />
          <Route path="/Students/Profile" element={<ProfilePage/>} />
          <Route path="/Employers/Signup" element={<EmployerSignup/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
axios.defaults.withCredentials = true;

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  // Check authentication status on component mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students/auth/status', {
          withCredentials: true, // Ensures cookies are sent with the request
        });
        console.log('Auth status response:', response.data);
        setIsAuthenticated(response.data.isAuthenticated);
        console.log('Navbar isAuthenticated:', isAuthenticated);
      } catch (error) {
        console.error('Error checking authentication status:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
    const intervalId = setInterval(checkAuthStatus, 5000);

  return () => clearInterval(intervalId); 
  }, []);

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">Jazze</div>
      {isAuthenticated ? (
        <div className="flex space-x-4">
          <button className="text-white">Who's Hiring</button>
          <button className='text-white'>Events</button>
          <button className='text-white'>Jobs Avaliable</button>
          <button className="text-white">Applied Jobs</button>
          <button className="text-white" onClick={()=>navigate('/Students/Profile')}>Profile</button>
          
          <button
            className="text-white"
            onClick={async () => {
              try {
                await axios.post('http://localhost:5000/api/students/logout', {}, { withCredentials: true });
                setIsAuthenticated(false);
                alert('You have been logged out!');
              } catch (error) {
                console.error('Error logging out:', error);
                alert('Logout failed!');
              }
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">You are one click away from finding a job.</span>
          <button
            className="text-white bg-blue-500 px-3 py-1 rounded"
            onClick={() => navigate('/Students/Signin')}
          >
            Sign In
          </button>
          <button
            className="text-white bg-green-500 px-3 py-1 rounded"
            onClick={() => navigate('/Students/Signup')}
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

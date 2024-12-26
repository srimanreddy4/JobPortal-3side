// Import necessary dependencies
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/students/signin', formData);
      alert(response.data.message); 
      
      navigate('/Students');
      window.location.reload();
      // Show success message
      // Optionally, save user info in localStorage or state
      localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Signin failed!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign In</h2>
        <form onSubmit={handleSignin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">Remember Me</label>
          </div>

          {/* Forgot Password */}
          <div className="text-sm text-right">
            <a
              href="/forgot-password"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>

          {/* Divider
          <div className="text-center text-sm text-gray-500 my-4">or sign in with</div> */}

          {/* Social Sign-in Buttons
          <div className="flex justify-center space-x-4">
            <button
              type="button"
              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md shadow-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-300"
            >
              Google
            </button>
            <button
              type="button"
              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md shadow-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-300"
            >
              Facebook
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default SigninPage;

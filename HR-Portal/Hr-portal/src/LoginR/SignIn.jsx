import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SignInSignUp.css";

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'employee', // Default role
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example: Add proper validation logic here
    if (formData.email && formData.password) {
      if (formData.role === 'hr') {
        navigate('/Hrhome');
      } else {
        navigate('/EmployeeDashboard');
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="signin-container">
      {/* Left Section: Image or Illustration */}
      <div className="signin-image">
        <img
          src="hrone.jpg"
          alt="Sign in illustration"
          className="signin-illustration"
        />
      </div>

      {/* Right Section: Sign-In Form */}
      <div className="signin-form">
        <h2 className="signin-title">Welcome Back!</h2>
        <p className="signin-subtitle">
          Don't have an account? <a href="/signup" className="link">Sign up here</a>
        </p>
        
        <form onSubmit={handleSubmit} className="signin-form-fields">
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email ID"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>

          {/* Role Dropdown */}
          <div className="form-group">
            <label htmlFor="role" className="form-label">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="form-select"
            >
              <option value="employee">Employee</option>
              <option value="hr">HR</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-submit">Sign In</button>
        </form>

        {/* Forgot Password */}
        <p className="forgot-password">
          <a href="/forgot-password" className="link">Forgot your password?</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

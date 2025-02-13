import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signup.css"
import webicons from "../../assets/webicons.png"; // Import the icon image

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // For navigation after form submission

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation here

    // After successful form submission, navigate to the dashboard (or another page)
    navigate('/dashboard');
  };

  return (
    <div className="signup-container">
      <div className="card">
        {/* Icon Section */}
        <div className="icon">
          <img src={webicons} alt="Icon" />
        </div>

        {/* Heading Section */}
        <h2>Sign Up Now!!</h2>
        <p>Get started by creating an account in Hamro inventory. For free!</p>

        {/* Form Section */}
        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email Input */}
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <span className="toggle-password"></span>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from "../../api/api"; // Named import
import "./Register.css";
import webicons from "../../assets/webicons.png"; // Import image

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone_number:'',
    address:''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData); // API call to registerUser
      if (response) {
        alert("Register successful! Please log in.");
        navigate("/login"); // Redirect to Login page
      }
    } catch (error){
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="card">
        <div className="icon">
          <img src={webicons} alt="Icon" />
        </div>

        <h2>Register Now!!</h2>
        <p>Get started by creating an account in Hamro inventory. For free!</p>

        <form onSubmit={handleSubmit}>
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
          <div className="input-group">
            <input
              type="text"
              name="phone_number"
              placeholder="Phone Number"
              value={formData.phone_number}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <button type="submit" className="btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

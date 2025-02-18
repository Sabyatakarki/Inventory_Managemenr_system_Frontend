import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signup.css";
import webicons from "../../assets/webicons.png"; 
import signup2 from "../../assets/signup2.png"; // ✅ Import the image

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div
      className="signup-container">
      <div className="card">
        <div className="icon">
          <img src={webicons} alt="Icon" />
        </div>

        <h2>Sign Up Now!!</h2>
        <p>Get started by creating an account in Hamro inventory. For free!</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} required />
          </div>

          <div className="input-group">
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
          </div>

          <div className="input-group">
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
            <span className="toggle-password"></span>
          </div>

          <button type="submit" className="btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

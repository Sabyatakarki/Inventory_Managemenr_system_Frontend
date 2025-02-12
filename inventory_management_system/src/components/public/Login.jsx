import React from 'react';
import './Login.css'; // 
import login from "../../assets/login.png"; // Import the image

const Login = () => {
  return (
    <div className="container">
      <div className="image-section">
        <img src={login} alt="Single Image" /> {/* Using the imported image */}
      </div>
      <div className="outer-card">
        <div className="inner-card">
          <h2>Welcome Back!!</h2>
          <p>Please fill out your credentials to access.</p>
          <form>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
            />
            
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Enter your password" 
              required 
            />
            
            <p className="note">NOTE: Remember your password!</p>
            <button type="submit" className="login-button">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

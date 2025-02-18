import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "./Login.css";
import loginImage from "../../assets/login.png"; // Import image

const Login = () => {
  const navigate = useNavigate(); // React Router navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check credentials (Change these as needed)
    if (email === "sabyatakarki05@gmail.com" && password === "password") {
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      alert("Invalid email or password. Try again.");
    }
  };

  return (
    <div className="container">
      <div className="image-section">
        <img src={loginImage} alt="Login" />
      </div>
      <div className="outer-card">
        <div className="inner-card">
          <h2>Welcome Back!!</h2>
          <p>Please fill out your credentials to access.</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <p className="note">NOTE: Remember your password!</p>
            <button type="submit" className="login-button">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

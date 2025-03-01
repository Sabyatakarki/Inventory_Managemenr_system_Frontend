import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/api"; // Named import
import "./Login.css";
import loginImage from "../../assets/login.png"; // Import image

const Login = () => {
  const navigate = useNavigate(); // React Router navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error state for validation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({ email, password }); // API call to loginUser
      if (response.token) {
        localStorage.setItem("token", response.token); // Store token in localStorage

      localStorage.setItem("userId", response.user.id);
      localStorage.setItem("userEmail", response.user.email);
        alert("Login successful!");
        navigate("/Inventory"); // Redirect to Dashboard
      }
    } catch (error) {
      setError("Invalid email or password. Try again."); // Display error message
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
          {error && <p className="error-message">{error}</p>} {/* Show error message */}
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

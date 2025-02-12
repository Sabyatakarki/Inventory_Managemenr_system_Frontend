import React from 'react';
import { Link } from 'react-router-dom';
import Lock from '../assets/Lock.png'; // Import the Lock icon

const Free = () => {
  return (
    <div className="signup-container">
      <div className="card">
        {/* Icon Section */}
        <div className="icon">
          <img src={Lock} alt="Icon" />
        </div>

        {/* Heading Section */}
        <h2>!!DISCLAIMER!!</h2>
        <p>To go further, you must create an account or simply log in first.</p>

        {/* Buttons */}
        <div className="buttons">
          <Link to="/signup">
            <button className="signup">Sign Up</button>
          </Link>
          <p className="or-text">OR</p>
          <Link to="/login">
            <button className="login">Log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Free;

import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <p>Welcome to your profile!</p>

      <Link to="/" className="back-btn">⬅ Back to Dashboard</Link>
    </div>
  );
};

export default Profile;

import React from "react";
import { Link } from "react-router-dom";
import "./Update.css";

const Update = () => {
  return (
    <div className="Container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Hamro Inventory</h2>
        <Link to="/" className="sidebar-btn">Home</Link>
        <Link to="/products" className="sidebar-btn">Products</Link>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Dashboard Header */}
        <header className="dashboard-header">
          <h1>Welcome, To Hamro Inventory</h1>
        </header>

        {/* Navigation Tabs */}
        <nav className="dashboard-nav">
          <Link to="/" className="nav-btn">Dashboard</Link>
          <Link to="/updates" className="nav-btn active">Updates</Link>
        </nav>

        {/* Update Section */}
        <section className="updates-container">
          <div className="update-card">
            <h3 className="update-title">New Product Added:</h3>
            <p>"We have added new items to our inventory. Check out the latest products available for purchase!"</p>
          </div>

          <div className="update-card">
            <h3 className="update-title">System Maintenance:</h3>
            <p>"Scheduled maintenance completed successfully. The system is now fully operational."</p>
          </div>

          <div className="update-card">
            <h3 className="update-title">User Interface Update:</h3>
            <p>"We've made improvements to the dashboard for a better user experience."</p>
          </div>

          <div className="update-card">
            <h3 className="update-title">Price Updates:</h3>
            <p>"Prices for selected products have been adjusted. See the updated price list on the inventory page."</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Update;

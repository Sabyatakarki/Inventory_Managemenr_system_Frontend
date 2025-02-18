import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import meat from "../../assets/meat.jpg";
import veggies from "../../assets/veggies.jpg";
import coke from "../../assets/coke.jpg";

const Dashboard = () => {
  return (
    <div className="Container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Hamro Inventory</h2>
        <Link to="/" className="sidebar-btn">
          Home
        </Link>
        <Link to="/Product" className="sidebar-btn">
          Product
        </Link>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header Section */}
        <div className="header">
          <h2>Welcome, To Hamro Inventory</h2>
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
        </div>

        {/* Most Selling Products Section */}
        <h3 className="section-title">Most Selling Products</h3>
        <div className="products">
          <div className="product">
            <img src={meat} alt="Meat" />
            <p>Meat</p>
          </div>
          <div className="product">
            <img src={coke} alt="Soft Drinks" />
            <p>Soft Drinks</p>
          </div>
          <div className="product">
            <img src={veggies} alt="Veggies" />
            <p>Veggies</p>
          </div>
        </div>

        {/* Recent Purchase Section */}
        <div className="recent-purchase">
          <h2>Recent Purchase</h2>
          <p>
            <strong>Quantity:</strong> <span className="red">3.00</span>
          </p>
          <p>
            <strong>Total Cost:</strong> <span className="red">$1000</span>
          </p>
          <p>
            <strong>Profit:</strong> <span className="green">50+</span>
          </p>
        </div>

        {/* Top Product List */}
        <h3 className="section-title">Top Product List</h3>
        <table>
          <thead>
            <tr>
              <th>Brand Name</th>
              <th>Order Item</th>
              <th>Description</th>
              <th>Cost</th>
              <th>Supplier</th>
              <th>Quantity Left</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Coca Cola</td>
              <td>Coke</td>
              <td>Fresh</td>
              <td>$200</td>
              <td>IIILVO</td>
              <td>450</td>
            </tr>
            <tr>
              <td>Yasoda Foods</td>
              <td>Current Noodles</td>
              <td>Hot & Spicy</td>
              <td>$50</td>
              <td>Yasoda Foods</td>
              <td>608</td>
            </tr>
            <tr>
              <td>Nango</td>
              <td>Bread</td>
              <td>Sugar Free</td>
              <td>$80</td>
              <td>Nanglo</td>
              <td>348</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import profileIcon from "../../assets/profileIcon.png"; 
import "./Inventory.css"; // Ensure you have the CSS file

const Inventory = () => {
  const [products, setProducts] = useState([]); // Most selling products
  const [stock, setStock] = useState([]); // Stock details

  // Fetch data from backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/inventory"); // Replace with your API endpoint
        setProducts(response.data.mostSelling);
        setStock(response.data.stock);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="inventory-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Hamro Inventory</h2>
        <h1>Make your Business thrive</h1>
        <Link to="/Home" className="sidebar-btn active">🏠 Home</Link>
        <Link to="/Product" className="sidebar-btn">📦 Product</Link>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="inventory-header">
          <h1>Welcome, To Hamro Inventory</h1>

          {/* Profile Icon */}
          <Link to="/profile">
            <img src={profileIcon} alt="Profile" className="profile-icon" />
          </Link>
        </header>

        {/* Navigation Tabs */}
        <nav className="inventory-nav">
          <Link to="/" className="nav-btn active">Dashboard</Link>
          <Link to="/Update" className="nav-btn">Update</Link>
        </nav>

        {/* Stock Table */}
        <h3 className="section-title">Stock</h3>
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
            {stock.map((item, index) => (
              <tr key={index}>
                <td>{item.brandName}</td>
                <td>{item.orderItem}</td>
                <td>{item.description}</td>
                <td>{item.cost}</td>
                <td>{item.supplier}</td>
                <td>{item.quantityLeft}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;

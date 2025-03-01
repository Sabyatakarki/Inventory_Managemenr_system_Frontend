import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import profileIcon from "../../assets/profileIcon.png"; 
import profitIcon from "../../assets/profit.png"; 
import "./Inventory.css"; // Ensure you have the CSS file

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]); // Most selling products
  const [recentPurchase, setRecentPurchase] = useState([]); // Recent purchases
  const [stock, setStock] = useState([]); // Stock details

  // Fetch data from backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/inventory"); // Replace with your API endpoint
        setProducts(response.data.mostSelling);
        setRecentPurchase(response.data.recentPurchases);
        setStock(response.data.stock);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div className="inventory-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Hamro Inventory</h2>
        <Link to="/Home" className="sidebar-btn active">🏠 Home</Link>
        <Link to="/Product" className="sidebar-btn">📦 Product</Link>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="inventory-header">
          <h1>Welcome, To Hamro Inventory</h1>

          <div className="search-profile-section">
            {/* Search Section */}
            <div className="search-section">
              <input
                type="text"
                placeholder="Search product..."
                className="search-input"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="search-btn">🔍</button>
            </div>

            {/* Profile Icon */}
            <Link to="/profile">
              <img src={profileIcon} alt="Profile" className="profile-icon" />
            </Link>
          </div>

        </header>

        {/* Navigation Tabs */}
        <nav className="dashboard-nav">
          <Link to="/" className="nav-btn active">Inventory</Link>
          <Link to="/Update" className="nav-btn">Update</Link>
        </nav>

        {/* Most Selling Products */}
        <section className="most-selling">
          <h2>Most Selling Products</h2>
          <div className="product-list">
            {products.map((product, index) => (
              <div className="product-card" key={index}>
                <img src={product.imageUrl} alt={product.name} />
                <p>{product.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Purchase Section */}
        <section className="recent-purchase">
          <h2 className="recent-purchase-title">Recent Purchase</h2>
          <div className="purchase-card">
            <div className="purchase-info">
              <p><strong>Quantity:</strong> <span className="red">{recentPurchase.quantity}</span></p>
              <p><strong>Total Cost:</strong> <span className="red">${recentPurchase.totalCost}</span></p>
            </div>

            <div className="product-info">
              {recentPurchase.items && recentPurchase.items.map((item, index) => (
                <p key={index}><strong>{item.name}</strong> <span className="red">{item.quantity}</span></p>
              ))}
            </div>

            <div className="profit-info">
              <p><strong>Profit :</strong> <span className="green">{recentPurchase.profit}+</span></p>
              <img src={profitIcon} alt="Profit Icon" className="profit-icon" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Inventory;

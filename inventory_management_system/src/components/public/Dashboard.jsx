import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import meat from "../../assets/meat.jpg";
import veggies from "../../assets/veggies.jpg";
import coke from "../../assets/coke.jpg";
import profitIcon from "../../assets/profit.png"; // Profit icon
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current path to highlight the active tab
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Product list for search suggestions
  const products = ["Chicken", "Eggs", "Apple","Tea","Milk"];

  // Handle search input change
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = products.filter((product) =>
        product.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (product) => {
    setSearchTerm(product);
    setFilteredProducts([]);
    navigate("/Product");
  };

  return (
    <div className="Container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Hamro Inventory</h2>
        <Link to="/Home" className="sidebar-btn active">🏠 Home</Link>
        <Link to="/Product" className="sidebar-btn">📦 Product</Link>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="dashboard-header">
          <h1>Welcome, To Hamro Inventory</h1>
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

          {/* Search Suggestions Panel */}
          {filteredProducts.length > 0 && (
            <div className="search-panel">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="search-suggestion"
                  onClick={() => handleSuggestionClick(product)}
                >
                  {product}
                </div>
              ))}
            </div>
          )}
        </header>

        {/* Navigation Tabs */}
        <nav className="dashboard-nav">
          <Link to="/" className={`nav-btn ${location.pathname === "/" ? "active" : ""}`}>Dashboard</Link>
          <Link to="/update" className={`nav-btn ${location.pathname === "/update" ? "active" : ""}`}>Update</Link>
        </nav>

        {/* Most Selling Products */}
        <section className="most-selling">
          <h2>Most Selling Products</h2>
          <div className="product-list">
            <div className="product-card">
              <img src={meat} alt="Meat" />
              <p>Meat</p>
            </div>
            <div className="product-card">
              <img src={coke} alt="Soft Drinks" />
              <p>Soft Drinks</p>
            </div>
            <div className="product-card">
              <img src={veggies} alt="Veggies" />
              <p>Veggies</p>
            </div>
          </div>
        </section>

        {/* Recent Purchase Section */}
        <section className="recent-purchase">
          <h2 className="recent-purchase-title">Recent purchase</h2>
          <div className="purchase-card">
            <div className="purchase-info">
              <p><strong>Quantity:</strong> <span className="red">3.00</span></p>
              <p><strong>Total Cost:</strong> <span className="red">$1000</span></p>
            </div>

            <div className="product-info">
              <p><strong>Chicken</strong> <span className="red">40 packs</span></p>
              <p><strong>Apple</strong> <span>10 kl</span></p>
            </div>

            <div className="profit-info">
              <p><strong>Profit :</strong> <span className="green">50+</span></p>
              <img src={profitIcon} alt="Profit Icon" className="profit-icon" />
            </div>
          </div>
        </section>

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
              <td>200</td>
              <td>IIILVO</td>
              <td>450</td>
            </tr>
            <tr>
              <td>Yasoda Foods</td>
              <td>Current Noodles</td>
              <td>Hot & Spicy</td>
              <td>50</td>
              <td>Yasoda Foods</td>
              <td>608</td>
            </tr>
            <tr>
              <td>Nango</td>
              <td>Bread</td>
              <td>Sugar Free</td>
              <td>80</td>
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

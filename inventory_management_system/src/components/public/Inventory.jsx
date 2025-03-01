import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import { Link, useNavigate } from "react-router-dom";
import profileIcon from "../../assets/profileIcon.png"; // Profile icon
import profitIcon from "../../assets/profit.png"; 
import "./Inventory.css";

const Inventory = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]); // To store products fetched from the backend

  // Fetch products from the backend when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/inventory"); // Replace with your API endpoint
        setProducts(response.data.inventories); // Assuming the API returns a list of products under 'inventories'
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

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

  const handleSuggestionClick = (product) => {
    setSearchTerm(product.name); // Assuming product has 'name' property
    setFilteredProducts([]);
    navigate("/Product");
  };

  return (
    <div className="Container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Hamro Inventory</h2>
        <Link to="/Inventory" className="sidebar-btn active">🏠 Home</Link>
        <Link to="/Product" className="sidebar-btn">📦 Product</Link>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="dashboard-header">
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

          {/* Search Suggestions Panel */}
          {filteredProducts.length > 0 && (
            <div className="search-panel">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="search-suggestion"
                  onClick={() => handleSuggestionClick(product)}
                >
                  {product.name}
                </div>
              ))}
            </div>
          )}
        </header>

        {/* Navigation Tabs */}
        <nav className="dashboard-nav">
          <Link to="/" className="nav-btn active">Dashboard</Link>
          <Link to="/Update" className="nav-btn">Update</Link>
        </nav>

        {/* Most Selling Products */}
        <section className="most-selling">
          <h2>Most Selling Products</h2>
          <div className="product-list">
            {products.map((product, index) => (
              <div className="product-card" key={index}>
                <img src={product.imageUrl} alt={product.name} /> {/* Use dynamic image URL */}
                <p>{product.name}</p>
              </div>
            ))}
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

            <div className="profit-info">
              <p><strong>Profit :</strong> <span className="green">50+</span></p>
              <img src={profitIcon} alt="Profit Icon" className="profit-icon" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Inventory;

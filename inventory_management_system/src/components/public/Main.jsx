import React from "react";
import "./Main.css";
import ss from "../../assets/ss.png";
import image from "../../assets/image.png";
import stock from "../../assets/stock.png";
import product from "../../assets/product.png";
import webicons from "../../assets/webicons.png"; // Replace with your actual cart image

const Main = () => {
  const handleLoginClick = () => {
    window.location.href = "/login";
  }
    const handlerRegisterClick = () => {
      window.location.href = "/Register";
  }
  const handleFreeClick=()=>{
    window.location.href ="/Free";
  };

  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">Hamro Inventory</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#support">Support</a></li>
          <li><a href="#More">More</a></li>
          <li><button className="login-btn" onClick={handleLoginClick}>Log In</button></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="text-content">
            <h1>Grocery Inventory Management</h1>
            <p>
              Increase your sales and keep track of every unit with our powerful stock
              management, order fulfillment, and inventory control system.A reliable inventory platform to help you grow you business.
            </p>
            <div className="buttons">
              <button className="signup-btn" onClick={handlerRegisterClick}>SIGNUP NOW</button>
              <button className="explore-btn"onClick={handleFreeClick}>ONLY EXPLORE</button>
            </div>
          </div>
          <img src={ss} alt="Inventory" className="inventory-img" />
        </div>
      </section>

      <section id="home" className = "Feature-home">
      <div className="features-container">
      <div className="feature-box">
        <h3>Product Tracking</h3>
        <p>
          This feature allows users to track the availability of products in real time.
          Users can see how many items are in stock and get updates when inventory is low.
          It helps businesses know what items are selling quickly and ensures they restock
          in time to meet customer demands.
        </p>
      </div>

      <div className="feature-box">
        <h3>Why is it useful?</h3>
        <p>
          A search bar with filtering options helps users quickly find specific items in
          the inventory, such as by name, category, or availability. It saves time by
          allowing users to find products without scrolling through long lists.
        </p>
      </div>

      <div className="feature-box">
        <h3>Easy to Update</h3>
        <p>
          Admins can add new products, update existing product details, or remove items
          that are no longer available from the inventory. It gives complete control over
          the inventory and keeps the database up-to-date.
        </p>
      </div>
    </div>
      </section>
      

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2 className="features-title">Our Features</h2>

        <div className="feature">
          <img src={image} alt="User-Friendly Interface" className="feature-img" />
          <div className="feature-text">
            <h3>User-Friendly Interface</h3>
            <p>
              Our website is designed with a user-friendly interface that ensures a seamless and enjoyable experience for all visitors. 
              From intuitive navigation to responsive design, 
              every aspect has been carefully crafted to cater to the needs of our users. The clean layout and clear visuals make it easy to find information, while interactive elements enhance engagement..
            </p>
          </div>
        </div>

        <div className="feature feature-reverse">
          <div className="feature-text">
            <h3>Proper Stock Management</h3>
            <p>
              Effective stock management is at the heart of our platform, designed to empower users with precise control over their inventory. 
              With real-time tracking, you can monitor stock levels, prevent overstocking, and avoid shortages effortlessly. Our intuitive tools 
              make it simple to organize, update, and categorize products, ensuring accurate inventory records at all times..
            </p>
          </div>
          <img src={stock} alt="Stock Management" className="feature-img" />
        </div>

        <div className="feature">
          <img src={product} alt="Product Listing" className="feature-img" />
          <div className="feature-text">
            <h3>Product Listing</h3>
            <p>
              Our product listing feature makes it incredibly easy to showcase and manage your inventory. 
              With a clean and organized interface, you can add new products, update details, or remove outdated items effortlessly. Each product listing includes essential details like name, category, price, and stock availability, ensuring your customers and team always have the information they need. 
              The system is optimized for accuracy and speed, allowing you to keep your inventory up-to-date with minimal effort.
            </p>
          </div>
        </div>
      </section>

      {/* Words from Developers Section */}
      <section id="More" className="developers-section">
        <h2>Words from Developers</h2>
        <div className="developer-box">
          <ul>
            <li>"HamroInventory transformed the way we manage our stock."</li>
            <li>"Our user-friendly interface ensures a smooth experience."</li>
            <li>"Make your business progress within a short time."</li>
          </ul>
          <p className="developer-name">- Developer</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="support" className="contact-container">
        <h2 className="contact-heading">Looking for more assistance?</h2>
        <p className="contact-subheading">Choose how you’d like to contact us</p>

        <div className="contact-box">
          <p>Send your queries through email, mail us at:</p>
          <p className="contact-email"><a href="mailto:support@HamroInventory">support@HamroInventory.com</a></p>
          <p>Contact:</p>
          <p className="contact-number">+977 97324242773</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <img src={webicons} alt="Cart Logo" className="footer-logo" />
        <h2 className="footer-title">HamroInventory</h2>
        <p>Experience the first Nepali Inventory Management System with its amazing features.</p>
        <p>.Make sure to follow us on Instagram ,Twitter,Threads</p>
        <p>© 2025, HamroInventory Pvt. Ltd. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Main;

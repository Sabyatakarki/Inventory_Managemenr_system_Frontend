import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

import chicken from "../../assets/chicken.png";
import buff from "../../assets/buff.png";
import turkey from "../../assets/turkey.png";
import coffee from "../../assets/coffee.png";
import greenTea from "../../assets/greenTea.png";
import teaproducts from "../../assets/teaproducts.png";
import apple from "../../assets/apple.png";
import mango from "../../assets/mango.png";
import grapes from "../../assets/grapes.png";
import banana from "../../assets/banana.png";
import brinjal from "../../assets/brinjal.png";
import milk from "../../assets/milk.png";
import cheese from "../../assets/cheese.png";
import cottagecheese from "../../assets/cottagecheese.png";
import curd from "../../assets/curd.png";
import butter from "../../assets/butter.png";
import chickenEgg from "../../assets/chickenEgg.png";
import turkeyeggs from "../../assets/turkeyeggs.png";
import duck from "../../assets/duck.png";

// Product Data
const productCategories = [
  {
    name: "Meat Products",
    items: [
      { name: "Chicken", img: chicken },
      { name: "Buff", img: buff },
      { name: "Turkey", img: turkey },
    ],
  },
  {
    name: "Teas",
    items: [
      { name: "Coffee", img: coffee },
      { name: "Green Tea", img: greenTea },
      { name: "Tea Products", img: teaproducts },
    ],
  },
  {
    name: "Vegetable and Fruits",
    items: [
      { name: "Apple", img: apple },
      { name: "Mango", img: mango },
      { name: "Grapes", img: grapes },
      { name: "Banana", img: banana },
      { name: "Brinjal", img: brinjal },
    ],
  },
  {
    name: "Dairy products",
    items: [
      { name: "Milk", img: milk },
      { name: "Cheese", img: cheese },
      { name: "Cottage Cheese", img: cottagecheese },
      { name: "Curd", img: curd },
      { name: "Butter", img: butter },
    ],
  },
  {
    name: "Eggs",
    items: [
      { name: "Chicken Eggs", img: chickenEgg },
      { name: "Turkey Eggs", img: turkeyeggs },
      { name: "Duck Eggs", img: duck },
    ],
  },
];

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(5);
  const [showToast, setShowToast] = useState(false);

  // Open Modal
  const openModal = (product) => {
    setSelectedProduct(product);
    setQuantity(5);
  };

  // Close Modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Increase Quantity
  const increaseQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, 50));
  };

  // Decrease Quantity
  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 5));
  };

  // Handle Purchase
  const handlePurchase = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      closeModal();
    }, 2000);
  };

  // Handle Cancel
  const handleCancel = () => {
    closeModal();
    setShowToast(false);
  };

  return (
    <div className="Container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Hamro Inventory</h2>
        <Link to="/" className="sidebar-btn">🏠 Home</Link>
        <Link to="/Product" className="sidebar-btn active">📦 Product</Link>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h2>Available Products</h2>
        </div>

        {productCategories.map((category, index) => (
          <div key={index} className="category">
            <h3>{category.name}</h3>
            <div className="product-list">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="product"
                  onClick={() => openModal(item)}
                >
                  <img src={item.img} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <img src={selectedProduct.img} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <div className="quantity-controls">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <p><strong>NOTE:</strong> Minimum 5 packs required</p>
            <div className="modal-buttons">
              <button className="purchase-btn" onClick={handlePurchase}>
                Purchase
              </button>
              <button className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
            </div>
            <p className="price">Total : ₹{110 * quantity}</p>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="toast-message">✅ Successfully Purchased!</div>
      )}
    </div>
  );
};

export default Product;

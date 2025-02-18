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
  // Initialize all product quantities to 5
  const initialQuantities = productCategories.reduce((acc, category) => {
    category.items.forEach((item) => {
      acc[item.name] = 5;
    });
    return acc;
  }, {});

  const [quantities, setQuantities] = useState(initialQuantities);

  // Function to increase quantity (up to 50)
  const increaseQuantity = (itemName) => {
    setQuantities((prev) => ({
      ...prev,
      [itemName]: Math.min((prev[itemName] || 5) + 1, 50),
    }));
  };

  // Function to decrease quantity (down to 5)
  const decreaseQuantity = (itemName) => {
    setQuantities((prev) => ({
      ...prev,
      [itemName]: Math.max((prev[itemName] || 5) - 1, 5), // Minimum value is 5
    }));
  };

  return (
    <div className="Container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Hamro Inventory</h2>
        <Link to="/" className="sidebar-btn">Home</Link>
        <Link to="/Product" className="sidebar-btn active">Products</Link>
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
                <div key={idx} className="product">
                  <img src={item.img} alt={item.name} />
                  <p>{item.name}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.name)}>-</button>
                    <span>{quantities[item.name]}</span>
                    <button onClick={() => increaseQuantity(item.name)}>+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

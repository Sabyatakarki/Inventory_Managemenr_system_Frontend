import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
    const [products, setProducts] = useState([]);

    // Fetch products from backend
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            // Correct endpoint for fetching products
            const response = await axios.get("http://localhost:4000/product");
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Delete a product
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/product/${id}`);
            setProducts(products.filter((product) => product._id !== id)); // Update state
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div className="product-container">
            <div className="sidebar">
                <h2>Hamro Inventory</h2>
                <Link to="/Inventory" className="sidebar-btn">🏠 Home</Link>
                <Link to="/Product" className="sidebar-btn">📦 Product</Link>
                <Link to="/CreateProduct" className="sidebar-btn">➕ Create Product</Link>
            </div>

            <div className="main-content">
                <h2>Product List</h2>
                <div className="product-grid">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product._id} className="product-card">
                                <div className="image-container">
                                    <img 
                                        src={`http://localhost:4000/uploads/${product.productImage}`} 
                                        alt={product.productName} 
                                        className="product-image" 
                                    />
                                </div>
                                <h3 className="product-title">{product.productName}</h3>
                                <p className="product-price">Price: ${product.price}</p>
                                <button className="delete-btn" onClick={() => handleDelete(product._id)}>
                                    Delete
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No products available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;

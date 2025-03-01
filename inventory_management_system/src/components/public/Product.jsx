import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../api/api";  // Corrected import path
import axios from "axios";
import "./Product.css";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [purchaseStatus, setPurchaseStatus] = useState(false);

    // Fetch products from backend
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async()=>{
        try {
            const response = await axios.get("http://localhost:4000/product");
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleDelete = async (productId) => {
        try {
            const deletedProduct = await deleteProduct(productId);
            if (deletedProduct.message === "Product deleted") {
                // Remove the deleted product from state
                setProducts(products.filter(product => product._id !== productId));
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setPurchaseStatus(false); // Reset purchase status when selecting a new product
    };

    const handlePurchase = () => {
        setPurchaseStatus(true); // Set purchase status to true when clicked
    };

    const handleCancel = () => {
        setSelectedProduct(null); // Close the product details panel
    };

    return (
        <div className="product-container">
            <div className="sidebar">
                <h2>Hamro Inventory</h2>
                <Link to="/Inventory" className="sidebar-btn">🏠 Home</Link>
                <Link to="/product" className="sidebar-btn">📦 Product</Link>
            </div>

            <div className="main-content">
                <h2>All Items On Stocks</h2>
                <div className="product-grid">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product._id} className="product-card">
                                <div className="image-container">
                                    <img 
                                        src={`http://localhost:4000/uploads/${product.productImage}`} 
                                        alt={product.productName} 
                                        className="product-image" 
                                        onClick={() => handleProductClick(product)} // Open product details on click
                                    />
                                </div>
                                <h3 className="product-title">{product.productName}</h3>
                                <p className="product-price">Price: ${product.price}</p>
                                <button 
                                    className="delete-btn"
                                    onClick={() => handleDelete(product._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No products available.</p>
                    )}
                </div>
            </div>

            {/* Product Details Panel */}
            {selectedProduct && (
                <div className="product-details-panel">
                    <div className="product-image-container">
                        <img 
                            src={`http://localhost:4000/uploads/${selectedProduct.productImage}`} 
                            alt={selectedProduct.productName} 
                            className="product-detail-image"
                        />
                    </div>
                    <h3>{selectedProduct.productName}</h3>
                    <p>Price: ${selectedProduct.price}</p>
                    <p>{selectedProduct.description}</p>

                    <div className="button-container">
                        <button 
                            className="purchase-btn"
                            onClick={handlePurchase}
                        >
                            {purchaseStatus ? "Purchase Successfully" : "Purchase"}
                        </button>
                        <button 
                            className="cancel-btn"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>

                    {purchaseStatus && (
                        <div className="purchase-message">
                            <p>Purchase Successful!</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Product;

import React, { useState } from "react";
import "../styles/favorites.css"; // Using the new favorites.css
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import demo from "../assets/demo.png"; // Assuming demo.png is the placeholder image
import { CiHeart } from "react-icons/ci";

const Favorites = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Initial favorites list with pre-selected favorite products
  const initialFavorites = [
    { name: "Apple Watch Series 4", price: "$120.00", image: demo, rating: 4.5 },
    { name: "Air-Max-270", price: "$60.00", image: demo, rating: 4.2 },
    { name: "Minimal Chair Tool", price: "$24.59", image: demo, rating: 4.0 },
    { name: "Amazfit Vip", price: "$45.00", image: demo, rating: 3.8 },
    { name: "Gumbo Mouse", price: "$12.99", image: demo, rating: 4.1 },
    { name: "Camera Tripod", price: "$99.00", image: demo, rating: 4.3 },
  ];

  // State for managing the favorite items
  const [favorites, setFavorites] = useState(initialFavorites);

  // Function to toggle the heart icon and add/remove product from favorites
  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.includes(product);
      return isAlreadyFavorite
        ? prevFavorites.filter((item) => item !== product) // Remove if already in favorites
        : [...prevFavorites, product]; // Add to favorites if it's not already in the list
    });
  };

  // Function to render the star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = Math.round(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array(fullStars).fill(<span className="star full">★</span>)}
        {halfStars > 0 && <span className="star half">☆</span>}
        {Array(emptyStars).fill(<span className="star empty">☆</span>)}
      </>
    );
  };

  return (
    <div className={`product-layout ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`mainp-content ${isSidebarOpen ? "" : "margin-closed"}`}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <h1 className="product-title">Favorites</h1>

        <div className="products-container">
          {/* Products Section */}
          <div className="products-section">
            {/* Product Grid for Favorites */}
            <div className="product-grid">
              {favorites.length === 0 ? (
                <p>No favorites yet. Add items to your favorites.</p>
              ) : (
                favorites.map((product, index) => (
                  <div className="product-card" key={index}>
                    <img src={product.image} alt={product.name} />
                    {/* Heart Icon */}
                    <div
                      className={`favorite-icon ${favorites.includes(product) ? "filled" : ""}`}
                      onClick={() => toggleFavorite(product)}
                    >
                      <CiHeart size={30} />
                    </div>
                    <h3>{product.name}</h3>
                    <p className="price">{product.price}</p>
                    <p className="quantity">
                      <span className="rating">{renderStars(product.rating)}</span>
                      &nbsp;({product.rating})
                    </p>
                    <button className="edit-btn">Edit Product</button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;

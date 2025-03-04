import React, { useState } from "react";
import "../styles/products.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import demo from "../assets/demo.png";  // Assuming demo.png is the placeholder image
import { CiHeart } from "react-icons/ci";

const Products = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // State for managing the favorite items
  const [favorites, setFavorites] = useState([]);

  // Function to toggle the heart icon and add/remove product from favorites
  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      // Check if the product is already in the favorites list
      const isAlreadyFavorite = prevFavorites.some(
        (item) => item.name === product.name && item.price === product.price
      );

      // If the product is already in the favorites, remove it; otherwise, add it
      return isAlreadyFavorite
        ? prevFavorites.filter((item) => item.name !== product.name || item.price !== product.price)
        : [...prevFavorites, product];
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

  const products = [
    { name: "Apple Watch Series 4", price: "$120.00", image: demo, rating: 4.5 },
    { name: "Girl Handy Bag", price: "$545.30", image: demo, rating: 3.8 },
    { name: "Beats Headphone", price: "$575.00", image: demo, rating: 4.2 },
  ];

  return (
    <div className={`product-layout ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`mainp-content ${isSidebarOpen ? "" : "margin-closed"}`}>
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <h1 className="product-title">Products</h1>

        <div className="products-container">
          {/* Top Banner Section */}
          <div className="top-banner">
            <div className="banner-content">
              <p> September 12-22 </p>
              <h1>Enjoy free home <br></br>delivery this summer</h1>
              <p>Designer Dresses - Pick from trendy Designer Dresses</p>
              <button className="shop-now-btn">Shop Now</button>
            </div>
          </div>

          {/* Products Section */}
          <div className="products-section">
            {/* Product Grid */}
            <div className="product-grid">
              {products.map((product, index) => (
                <div className="product-card" key={index}>
                  <img src={product.image} alt={product.name} />
                  {/* Heart Icon */}
                  <div
                    className={`favorite-icon${favorites.some(item => item.name === product.name && item.price === product.price) ? " filled" : ""}`}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

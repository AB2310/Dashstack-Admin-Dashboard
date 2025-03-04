import React from "react";

const FeaturedProduct = () => {
  return (
    <div className="featured-product-section">
      <h2>Featured Product</h2>

      {/* Image for Featured Product */}
      <div className="product-image-container">
        <img src={require("../assets/beatsheadset.png")} alt="Beats Headphone" className="featured-product-image" />
      </div>

      {/* Product Info */}
      <p className="product-name">Beats Headphone 2019 </p>
      <p className="product-price">$89.00</p>
    </div>
  );
};

export default FeaturedProduct;

import React, { useState } from "react";
import "./SingleProduct.scss";

const ProductCard: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>("image1.png");
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [selectedColor, setSelectedColor] = useState<string>("black");

  const images = ["Asgaardsofa1.png", "image2.png", "image3.png", "image4.png"];

  return (
    <div className="product-card">
      {/* Image Gallery */}
      <div className="image-gallery">
        <img src={selectedImage} alt="Main" className="main-image" />
        <div className="thumbnail-images">
          {images.map((image, idx) => (
            <img key={idx} src={image} alt={`Thumbnail ${idx}`} className={`thumbnail ${image === selectedImage ? "active" : ""}`} onClick={() => setSelectedImage(image)} />
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h1>Asgaard Sofa</h1>
        <p className="price">Rs. 250,000.00</p>

        <div className="ratings">
          <span>⭐⭐⭐⭐☆</span> <span>(5 Customer Reviews)</span>
        </div>

        <p className="description">Setting the bar as one of the loudest packers in its class, the Kilburn is a compact, stout-hearted...</p>

        {/* Size Options */}
        <div className="size-section">
          <h4>Size</h4>
          <div className="sizes">
            {["S", "M", "L", "XL"].map((size) => (
              <button key={size} className={`size-btn ${size === selectedSize ? "selected" : ""}`} onClick={() => setSelectedSize(size)}>
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Options */}
        <div className="color-section">
          <h4>Color</h4>
          <div className="colors">
            {["black", "brown", "white", "purple"].map((color) => (
              <div key={color} className={`color-circle ${color} ${color === selectedColor ? "selected" : ""}`} onClick={() => setSelectedColor(color)}></div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="actions">
          <input type="number" defaultValue={1} min={1} className="quantity-input" />
          <button className="add-to-cart">Add to Cart</button>
          <button className="compare-btn">Compare</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

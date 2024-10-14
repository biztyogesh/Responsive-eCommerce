import React from "react";
import "./SingleProduct.scss";
import sofa1 from "../../assets/images/sofa1.png";
import Asgaardsofa2 from "../../assets/images/Asgaardsofa2.png";
import Asgaardsofa3 from "../../assets/images/Asgaardsofa3.png";
import Asgaardsofa4 from "../../assets/images/Asgaardsofa4.png";
import Asgaardsofa5 from "../../assets/images/Asgaardsofa5.png";
import { Icon, Rating } from "semantic-ui-react";

function SingleProduct() {
  return (
    <div className="product-card">
      <div className="product-images">
        <div className="thumbnail-images">
          <img src={Asgaardsofa2} alt="Thumbnail 2" />
          <img src={Asgaardsofa3} alt="Thumbnail 3" />
          <img src={Asgaardsofa4} alt="Thumbnail 4" />
          <img src={Asgaardsofa5} alt="Thumbnail 5" />
        </div>
        <div className="main-image">
          <img src={sofa1} alt="Main Product" />
        </div>
      </div>
      <div className="product-details">
        <h2 className="product-title">Asgaard Sofa</h2>
        <p className="product-price">Rs. 250,000.00</p>

        <Rating
          defaultRating={4}
          maxRating={5}
          disabled
          style={{
            color: "#FFA500", // Orange color for filled stars
          }}
        />
        <p className="product-description">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
        </p>
        <div className="product-options">
          <div className="sizes">
            <label>Size:</label>
            <button className="size-button">M</button>
            <button className="size-button">L</button>
            <button className="size-button">XL</button>
            <button className="size-button">XS</button>
          </div>
        </div>
        <div className="product-actions">
          <div className="quantity-controls">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="add-to-cart">Add to Cart</button>
          <button className="compare">+ Compare</button>
        </div>
        <div className="additional-info">
          <p>SKU: SS001</p>
          <p>Category: Sofas</p>
          <p>Tags: Sofa, Chair, Home, Shop</p>
        </div>
        <div className="social-share">
          <span>Share: </span>
          <a href="#">
            <Icon name="facebook" />
          </a>
          <a href="#">
            <Icon name="linkedin" />
          </a>
          <a href="#">
            <Icon name="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

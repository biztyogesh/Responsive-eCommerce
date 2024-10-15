import React from "react";
import "./SingleProduct.scss";
import sofa1 from "../../assets/images/sofa1.png";
import Asgaardsofa2 from "../../assets/images/Asgaardsofa2.png";
import Asgaardsofa3 from "../../assets/images/Asgaardsofa3.png";
import Asgaardsofa4 from "../../assets/images/Asgaardsofa4.png";
import Asgaardsofa5 from "../../assets/images/Asgaardsofa5.png";
import { Icon, Rating } from "semantic-ui-react";
import ShopProduct from "../ShopProduct/ShopProduct";
import Footer from "../Footer/Footer";

function SingleProduct() {
  return (
    <>
      <div className="productt-card">
        <div className="productt-images">
          <div className="thumbnail-images">
            <img src={Asgaardsofa2} alt="Thumbnail 2" />
            <img src={Asgaardsofa3} alt="Thumbnail 3" />
            <img src={Asgaardsofa4} alt="Thumbnail 4" />
            <img src={Asgaardsofa5} alt="Thumbnail 5" />
          </div>
          <div className="main-images">
            <img src={sofa1} alt="Main Products" />
          </div>
        </div>
        <div className="productt-details">
          <h2 className="productt-title">Asgaard Sofa</h2>
          <p className="productt-price">Rs. 250,000.00</p>

          <Rating
            defaultRating={4}
            maxRating={5}
            disabled
            style={{
              color: "#FFA500", // Orange color for filled stars
            }}
          />
          <p className="productt-description">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio</p>
          <div className="productt-options">
            <div className="sizes">
              <label>Size:</label>
              <button className="size-button">M</button>
              <button className="size-button">L</button>
              <button className="size-button">XL</button>
              <button className="size-button">XS</button>
            </div>
          </div>
          <div className="productt-actions">
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

      <div className="product-details">
        <div className="tabs-section">
          <button className="tab active">Description</button>
          <button className="tab">Additional Information</button>
          <button className="tab">Reviews [5]</button>
        </div>

        <div className="content-section">
          <div className="description">
            <p>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show
              on the road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
              stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine
              tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p>
          </div>
        </div>
        <div className="image-gallery">
          <img src={sofa1} alt="Sofa Image 1" />
          <img src={sofa1} alt="Sofa Image 2" />
        </div>
      </div>
      <ShopProduct />
      <Footer />
    </>
  );
}

export default SingleProduct;

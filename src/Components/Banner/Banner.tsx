import React from "react";
import "./Banner.scss";
import background from "../../assets/background.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h5>New Arrival</h5>
        <h1>Discover Our New Collection</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</h2>
        <button>Buy Now</button>
      </div>
      <div className="banner-image">
        <img src={background} alt="Banner" />
      </div>
    </section>
  );
};

export default Banner;

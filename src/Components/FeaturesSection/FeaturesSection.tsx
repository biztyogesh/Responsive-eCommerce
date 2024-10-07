import React from "react";
import { Icon } from "semantic-ui-react";
import "./FeaturesSection.scss";

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <div className="feature-item">
        <Icon name="trophy" size="big" />
        <div className="feature-text">
          <h3>High Quality</h3>
          <p>crafted from top materials</p>
        </div>
      </div>
      <div className="feature-item">
        <Icon name="shield alternate" size="big" />
        <div className="feature-text">
          <h3>Warranty Protection</h3>
          <p>Over 2 years</p>
        </div>
      </div>
      <div className="feature-item">
        <Icon name="shipping fast" size="big" />
        <div className="feature-text">
          <h3>Free Shipping</h3>
          <p>Order over 150 $</p>
        </div>
      </div>
      <div className="feature-item">
        <Icon name="american sign language interpreting" size="big" />
        <div className="feature-text">
          <h3>24 / 7 Support</h3>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

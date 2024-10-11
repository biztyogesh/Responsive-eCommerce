import { Icon } from "semantic-ui-react";
import "./AsgaardHeader.scss";

function AsgaardHeader() {
  return (
    <div className="product_filter_container">
      <div className="filter_options">
        <button className="filter_button">
          <Icon name="angle right" /> Home
        </button>
        <button className="filter_button">
          <Icon name="angle right" /> Shop
        </button>
        <button className="filter_button">
          <Icon name="arrows alternate vertical" /> Asgaard Sofa
        </button>
      </div>
    </div>
  );
}

export default AsgaardHeader;

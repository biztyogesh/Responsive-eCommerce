import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import "./Filter.scss";
import data from "../../utils/data.json";

interface Image {
  id: number;
  src: string;
  title: string;
  description: string;
  price: boolean;
}

function Filter() {
  const [products, setProducts] = useState([]);

  return (
    <div className="product-filter-container">
      <div className="filter-options">
        <button className="filter-button">
          <Icon name="filter" /> Filter
        </button>
        <button className="view-toggle">
          <Icon name="grid layout" />
        </button>
        <button className="view-toggle">
          <Icon name="list layout" />
        </button>
        <span className="result-count">Showing 1–16 of 32 results</span>
      </div>

      <div className="sorting-options">
        <label className="show-label">Show</label>
        <input type="text" id="showCount" value="16" readOnly className="show-count-input" />

        <label className="sort-label">Sort by</label>
        <select id="sortBy" defaultValue="default" className="sort-select">
          <option value="default">Default</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;

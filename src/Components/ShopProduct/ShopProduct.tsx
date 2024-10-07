import React, { useState } from "react";
import data from "../../utils/data.json";
import "./ShopProduct.scss";

interface Image {
  id: number;
  src: string;
  title: string;
  description: string;
  price: boolean;
}

function ShopProduct() {
  return (
    <div>
      <section className="gallerysection">
        <div className="productgrid">
          {data.map((data: any) => (
            <div className="productcard">
              <div className="productimage">
                {data.discount && <span className="productdiscount">-{data.discount}%</span>}
                {data.isNew && <span className="productnew">New</span>}
                <img src={data.src} alt={data.title} />
              </div>
              <div className="productinfo">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <p className="productprice">
                  {data.price}
                  {data.originalPrice && <span className="originalprice">{data.originalPrice}</span>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ShopProduct;

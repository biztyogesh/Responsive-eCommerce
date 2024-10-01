// export default ImageGallery;
import React, { useState } from "react";
import "./Images.scss";
import "./Gallery.scss";
import data from "../../utils/data.json";
import image99 from "../../assets/images/image99.png";
import image100 from "../../assets/images/image100.png";
import image101 from "../../assets/images/image101.png";
import rect24 from "../../assets/images/Rectangle24.png";
import rect25 from "../../assets/images/Rectangle25.png";
import rect40 from "../../assets/Rectangle40.png";
import { Button } from "semantic-ui-react";

interface Image {
  id: number;
  src: string;
  title: string;
  description: string;
  price: boolean;
}
function ImageGallery() {
  const [products, setProducts] = useState([]);
  // const [inspirationImages, setInspirationImages] = useState([]);

  return (
    <div className="images-page">
      <div className="images-page">
        <section className="image-section">
          <h2>Browse The Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="productdisplay-img-list">
            <div className="product-image">
              <img src={image99} alt="Dining" />
              <span>Dining</span>
            </div>
            <div className="product-image">
              <img src={image100} alt="Living" />
              <span>Living</span>
            </div>
            <div className="product-image">
              <img src={image101} alt="Bedroom" />
              <span>Bedroom</span>
            </div>
          </div>
        </section>
      </div>

      {/* Our Products */}
      <section className="gallery-section">
        <h2>Our Products</h2>
        <div className="product-grid">
          {data.map((data: any) => (
            <div className="product-card">
              <div className="product-image">
                {data.discount && <span className="product-discount">-{data.discount}%</span>}
                {data.isNew && <span className="product-new">New</span>}
                <img src={data.src} alt={data.title} />
              </div>
              <div className="product-info">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <p className="product-price">
                  {data.price}
                  {data.originalPrice && <span className="original-price">{data.originalPrice}</span>}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="show-more">Show More</button>
      </section>

      <section>
        <div className="room-inspiration-container">
          <div className="text-section">
            <h2>50+ Beautiful rooms inspiration</h2>
            <p>Our designer already made a lot of beautiful prototypes of rooms that inspire you.</p>
            <Button className="explore-btn">Explore More</Button>
          </div>
          <div className="image-section">
            <div className="image-card">
              <img src={rect24} alt="Room Inspiration 1" />
              <div className="image-text">
                <p>01 &mdash; Bed Room</p>
                <h3>Inner Peace</h3>
              </div>
            </div>
            <div className="image-card">
              <img src={rect25} alt="Room Inspiration 2" />
            </div>
            <div className="image-card">
              <img src={rect40} alt="Room Inspiration 3" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ImageGallery;

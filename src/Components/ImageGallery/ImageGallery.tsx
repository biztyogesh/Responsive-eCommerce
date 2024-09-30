// export default ImageGallery;
import React, { useState } from "react";
import "./Images.scss";
import data from "../../utils/data.json";
import image99 from "../../assets/images/image99.png";
import image100 from "../../assets/images/image100.png";
import image101 from "../../assets/images/image101.png";

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

      {/* Beautiful Rooms Inspiration */}
      {/* <section className="gallery-section inspiration-section">
        <h2>50+ Beautiful Rooms Inspiration</h2>
        <div className="inspiration-grid">
          {inspirationImages.map((image) => (
            <div key={image.id} className="inspiration-card">
              <img src={image.src} alt={image.title} />
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}

export default ImageGallery;

import React from "react";
import "./Home.scss";
import Banner from "../Banner/Banner";
import ImageGallery from "../ImageGallery/ImageGallery";

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <ImageGallery />
    </div>
  );
};

export default Home;

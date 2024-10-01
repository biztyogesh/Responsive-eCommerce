import React from "react";
import "./Home.scss";
import Banner from "../Banner/Banner";
import ImageGallery from "../ImageGallery/ImageGallery";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <ImageGallery />
      <Footer />
    </div>
  );
};

export default Home;

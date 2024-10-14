import React from "react";
import "./About.scss";
import AsgaardHeader from "../AsgaardHeader/AsgaardHeader";
import SingleProduct from "../SingleProduct/SingleProduct";

const About = () => {
  return (
    <div className="about-page">
      <AsgaardHeader />

      <SingleProduct />
    </div>
  );
};

export default About;

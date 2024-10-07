import React from "react";
import "./Shop.scss";
import FurniroShop from "../FurniroShop/FurniroShop";
import Filter from "../Filter/Filter";
import ShopProduct from "../ShopProduct/ShopProduct";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import Footer from "../Footer/Footer";

const Shop = () => {
  return (
    <div>
      <FurniroShop />
      <Filter />
      <ShopProduct />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Shop;

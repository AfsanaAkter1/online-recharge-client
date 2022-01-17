import React from "react";
import Details from "../Details/Details";
import HomeRecharge from "../HomeRecharge/HomeRecharge";
import Offers from "../Offers/Offers";
import PopularOffers from "../PopularOffers/PopularOffers";
import Navbar from "../../Shared/Navbar/Navbar";
import PayWith from "../../Shared/PayWith/PayWith";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeRecharge></HomeRecharge>
      <PopularOffers></PopularOffers>
      <Offers></Offers>
      <Details></Details>
      <PayWith />
      <Footer />
    </div>
  );
};

export default Home;

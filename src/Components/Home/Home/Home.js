import React from "react";
import HomeRecharge from "../HomeRecharge/HomeRecharge";
import Offers from "../Offers/Offers";
import PopularOffers from "../PopularOffers/PopularOffers";

const Home = () => {
  return (
    <div>
      <HomeRecharge></HomeRecharge>
      <PopularOffers></PopularOffers>
      <Offers></Offers>
    </div>
  );
};

export default Home;

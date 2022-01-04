import React from "react";
import AdvisoryCouncil from "../components/AdvisoryCouncil";
import Footer1 from "../components/Footer1";
import FourCards from "../components/FourCards";
import Hero1 from "../components/Hero1";
import Hero3 from "../components/Hero3";
import Hero4 from "../components/Hero4";
import HomeArea2 from "../components/HomeArea2";
import HowHelp from "../components/HowHelp";
import HowToApply from "../components/HowToApply";
import Navigation from "../components/Navigation";
import Perks from "../components/Perks";
import Price from "../components/Price";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero1 />
      <HomeArea2 />
      <Hero3 />
      <HowHelp />
      <FourCards />
      <HowToApply />
      <Perks />
      <AdvisoryCouncil />
      <Hero4 />
      <Price />
      <Footer1 />
    </div>
  );
};

export default Home;

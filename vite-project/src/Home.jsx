import React from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import LeftHeader from "./Pages/LeftHeader";
import RightFooter from "./Pages/RightFooter";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <LeftHeader />
        <div>
          <Header />
          <HeroSection />
        </div>
        <RightFooter />
      </div>
    </>
  );
};

export default Home;

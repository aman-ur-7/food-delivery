import React, { useState } from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import LeftHeader from "./Pages/LeftHeader";
import RightFooter from "./Pages/RightFooter";

const Home = () => {
  const [dataForRightFooter, setDataForRightFooter] = useState("");

  const sendDataToRightFooter = (data) => {
    setDataForRightFooter(data);
  };

  return (
    <>
      <div className="home-page">
        <LeftHeader />
        <div>
          <Header />
          <HeroSection sendDataToRightFooter={sendDataToRightFooter} />
        </div>
        <RightFooter dataFromHeroSection={dataForRightFooter} />
      </div>
    </>
  );
};

export default Home;

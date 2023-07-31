import React, { useEffect, useState } from "react";
import axios from "axios";

const RightFooter = (props) => {
  const dataFromHeroSection = props.dataFromHeroSection;
  const [foodData, setFoodData] = useState([]);

  const foodSellerData = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    await axios
      .get(`http://localhost:7001/user/read/${dataFromHeroSection}`, config)
      .then((data) => {
        setFoodData(data);
        console.log(foodData);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  // foodSellerData();
  useEffect(() => {
    console.log(foodData);
  }, []);

  return (
    <div className="orders">
      <div>
        <h1>My Order</h1>
        <div>
          <h3>Delivery address</h3>
          <span>{""}</span>
        </div>
        <div>
          <h3></h3>
          <h3></h3>
        </div>
      </div>
      <div></div>
      <p>The id is:{dataFromHeroSection} </p>
    </div>
  );
};

export default RightFooter;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillClockCircle } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

const RightFooter = (props) => {
  const dataFromHeroSection = props.dataFromHeroSection;
  const [foodData, setFoodData] = useState([]);

  const foodSellerData = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const foodResponse = await axios.get(
        `http://localhost:7001/user/read/${dataFromHeroSection}`,
        config
      );
      setFoodData(foodResponse);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    foodSellerData();
    console.log(foodData);
  }, [dataFromHeroSection]);

  const handleImgLoadingError = (e) => {
    e.target.src =
      "https://cdn.pixabay.com/photo/2019/07/25/17/22/diet-4363111_1280.jpg";
  };

  return (
    <div className="orders">
      <h1>My Order</h1>
      <div>
        <h3>Delivery address</h3>
        <h1>1342 Morris Street</h1>
      </div>
      <div className="orders-icons">
        <div>
          <AiFillClockCircle />
          <span>{Math.floor(Math.random() * 50)}mins</span>
        </div>
        <div>
          <IoLocationSharp />
          <span>{Math.floor(Math.random() * 10)}km</span>
        </div>
      </div>
      <div className="orders-cart">
        {foodData.status == 200 &&
          [foodData.data].map((item, index) => (
            <div key={index}>
              <img
                src={item.pic}
                alt="no pick items"
                onLoadedData={(e) => handleImgLoadingError(e)}
              />
              <div className="card-name">
                <div>
                  <span>{item.foodName}</span>
                  <span>{item.cost}Rs</span>
                </div>
                <span>Good food here</span>
                <select>
                  <option value="someOption">0</option>
                  <option value="otherOption">1</option>
                  <option value="otherOption">2</option>
                  <option value="otherOption">3</option>
                </select>
              </div>
            </div>
          ))}
      </div>

      <div className="delivery">
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2019/07/25/17/22/diet-4363111_1280.jpg"
            alt="these delivery "
          />
        </div>
        <hr />
        <div className="delivery-content">
          <div>
            <h3>Sub Total</h3>
            <span>3Rs</span>
          </div>
          <div>
            <h3>Delivery Fee</h3>
            <span>3Rs</span>
          </div>
        </div>
        <hr />
        <div className="delivery-cost">
          <h3>Total</h3>
          <span>34Rs</span>
        </div>
        <button className="button">take it</button>
      </div>
    </div>
  );
};

export default RightFooter;

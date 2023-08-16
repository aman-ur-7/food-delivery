import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillClockCircle } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { useData } from "../DataContext";

const RightFooter = (props) => {
  const { dataFromLogin } = useData("");
  const dataFromHeroSection = props.dataFromHeroSection;
  const [foodData, setFoodData] = useState([]);
  // const [numberItem, setNumberItem] = useState(undefined);

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
  }, [dataFromHeroSection]);

  const handleImgLoadingError = (e) => {
    e.target.src =
      "https://cdn.pixabay.com/photo/2019/07/25/17/22/diet-4363111_1280.jpg";
  };

  const sendEmail = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const emailResponse = await axios.post(
        `http://localhost:7001/user/email`,
        { dataFromLogin },
        config
      );
      console.log(emailResponse);
    } catch (error) {
      console.log(error);
    }
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
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          ))}
      </div>

      {foodData.status == 200 &&
        [foodData.data].map((item, index) => (
          <div className="delivery" key={index}>
            <div>
              <img src={item.pic} alt="these delivery " />
            </div>
            <hr />
            <div className="delivery-content">
              <div>
                <h3>Sub Total</h3>
                <span>{item.cost}Rs</span>
              </div>
              <div>
                <h3>Delivery Fee</h3>
                <span>30Rs</span>
              </div>
            </div>
            <hr />
            <div className="delivery-cost">
              <h3>Total</h3>
              <span>{item.cost}</span>
            </div>
            <button className="button" onClick={sendEmail}>
              take it
            </button>
          </div>
        ))}
    </div>
  );
};

export default RightFooter;

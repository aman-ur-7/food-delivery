import React, { useState } from "react";
import axios from "axios";

const FoodSeller = () => {
  const [foodName, setFoodName] = useState("");
  const [cost, setCost] = useState("");
  const [address, setAddress] = useState("");
  const [foodImage, setFoodImage] = useState(null);

  const seller = () => {};

  return (
    <div>
      <div>
        <form className="form" onSubmit={seller}>
          <fieldset>
            <legend>Food Name</legend>
            <input
              type="name"
              placeholder="Enter your food name"
              onChange={(e) => setFoodName(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>cost</legend>
            <input
              type="number"
              placeholder="Enter food price"
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>address</legend>
            <input
              type="text"
              placeholder="Enter your valid address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Food image</legend>
            <input
              type="file"
              onChange={(e) => setFoodImage(e.target.files[0])}
            />
          </fieldset>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default FoodSeller;

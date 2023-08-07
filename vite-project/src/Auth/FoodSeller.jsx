import React, { useState } from "react";
import axios from "axios";

const FoodSeller = () => {
  const [foodName, setFoodName] = useState("");
  const [cost, setCost] = useState("");
  const [address, setAddress] = useState("");
  const [pic, setPic] = useState(null);

  const seller = async (e) => {
    e.preventDefault();

    function refreshPage() {
      window.location.reload(true);
    }

    if (!foodName || !cost || !address || !pic) {
      alert("enter all fields");
      const timer = setTimeout(() => {
        refreshPage();
      }, 100);
      return () => clearTimeout(timer);
    }

    try {
      const sellerResponse = await axios.post(
        `http://localhost:7001/user/seller`,
        { foodName, cost, address, pic }
      );

      console.log(sellerResponse);
      if (sellerResponse) {
        const timer = setTimeout(() => {
          refreshPage();
        }, 2000);
        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <form className="form" onSubmit={seller}>
          <input
            type="name"
            placeholder="Enter your food name"
            onChange={(e) => setFoodName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter food price"
            onChange={(e) => setCost(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your valid address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            onChange={(e) => setPic(e.target.value)}
            placeholder="Paste the url"
          />
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default FoodSeller;

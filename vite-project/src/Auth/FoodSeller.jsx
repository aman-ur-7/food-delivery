import React, { useState } from "react";

const FoodSeller = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [address, setAddress] = useState("");
  const [pic, setPic] = useState("");

  return (
    <div>
      <div>
        <form className="form">
          <fieldset>
            <legend>Food Name</legend>
            <input
              type="name"
              placeholder="Enter your food name"
              onChange={(e) => setName(e.target.value)}
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
            <input type="file" onChange={(e) => setPic(e.target.value)} />
          </fieldset>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default FoodSeller;

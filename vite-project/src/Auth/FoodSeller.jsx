import React from "react";

const FoodSeller = () => {
  return (
    <div>
      <div>
        <form className="form">
          <fieldset>
            <legend>Food Name</legend>
            <input type="name" placeholder="Enter your food name" />
          </fieldset>
          <fieldset>
            <legend>cost</legend>
            <input type="number" placeholder="Enter food price" />
          </fieldset>
          <fieldset>
            <legend>address</legend>
            <input type="text" placeholder="Enter your valid address" />
          </fieldset>
          <fieldset>
            <legend>Food image</legend>
            <input type="file" />
          </fieldset>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default FoodSeller;

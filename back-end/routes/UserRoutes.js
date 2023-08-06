const express = require("express");
const Router = express.Router();

const {
  registerUser,
  loginUser,
  updateUser,
  readData,
  foodSeller,
  readFoodData,
} = require("../controllers/UserControllers");

Router.route("/register").post(registerUser);
Router.route("/login").post(loginUser);
Router.route("/seller").post(foodSeller);
Router.route("/update/:id").put(updateUser);
Router.route("/read").get(readData);
Router.route("/read/:id").get(readFoodData);

module.exports = Router;

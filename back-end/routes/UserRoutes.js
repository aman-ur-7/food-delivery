const express = require("express");
const Router = express.Router();
const {
  registerUser,
  loginUser,
  updateUser,
  foodSeller,
} = require("../controllers/UserControllers");

Router.route("/register").post(registerUser);
Router.route("/seller").post(foodSeller);
Router.route("/login").get(loginUser);
Router.route("/update/:id").put(updateUser);

module.exports = Router;

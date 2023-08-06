const express = require("express");
const Router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });

const {
  registerUser,
  loginUser,
  updateUser,
  readData,
  foodSeller,
  readFoodData,
} = require("../controllers/UserControllers");

const { uploadImage } = require("../controllers/UploadControllers");

Router.route("/register").post(registerUser);
Router.route("/login").post(loginUser);
// Router.route("/seller").post(foodSeller);
Router.route("/update/:id").put(updateUser);
Router.route("/read").get(readData);
Router.route("/read/:id").get(readFoodData);
Router.post("/seller", upload.single("image"), uploadImage, foodSeller);

module.exports = Router;

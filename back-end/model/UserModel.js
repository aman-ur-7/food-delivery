const mongoose = require("mongoose");
const { Schema } = mongoose;

const userModel = new Schema(
  {
    // _id: Object,
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    // pic: {
    //   type: String,
    //   default:
    //     "https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_1280.jpg",
    // },
  },
  {
    timestamps: true,
  }
);
const user = mongoose.model("user", userModel);
module.exports = user;

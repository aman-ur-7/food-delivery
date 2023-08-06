const mongoose = require("mongoose");
const { Schema } = mongoose;

const sellerModel = new Schema(
  {
    // _id: Object,
    foodName: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const seller = mongoose.model("seller", sellerModel);
module.exports = seller;

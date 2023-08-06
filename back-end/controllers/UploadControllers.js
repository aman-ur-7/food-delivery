// const ImageModel = require("../model/ImageModel");
const sellerModel = require("../model/SellerModel");

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).send("Please upload an image");

    const newImage = new sellerModel({
      name: req.file.originalname,
      path: req.file.path,
    });

    // Save the image document to the database
    await newImage.save();

    res.status(200).send(newImage);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};

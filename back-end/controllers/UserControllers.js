const UserModel = require("../model/UserModel");
const sellerModel = require("../model/SellerModel");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, address } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please enter all the fields");
  }

  const isUserExist = await UserModel.findOne({ email });

  if (isUserExist) {
    res.status(400).send("Can't use the same email");
  }

  const createUser = await UserModel.create({
    name,
    email,
    password,
    address,
  });

  if (createUser) {
    res.send(createUser);
  } else throw new Error();
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const userLogin = await UserModel.findOne({ email, password });

  if (userLogin) {
    res.status(200).send(userLogin);
  } else res.status(400).send(error);
});

const updateUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const updateUser = await UserModel.findOneAndUpdate(
      { email },
      { $set: { password: password } }
    );
    res.status(200).send(updateUser);
  } catch (error) {
    console.log(error);
  }
});

const foodSeller = asyncHandler(async (req, res) => {
  const { foodName, cost, address, pic } = req.body;

  if (!foodName || !cost || !address || !pic) {
    res.status(400);
    throw new Error("please enter all the fields");
  }

  const createUser = await sellerModel.create({
    foodName,
    cost,
    address,
    pic,
  });

  if (createUser) {
    res.status(200).send(createUser);
  } else throw new Error();
});

const readData = asyncHandler(async (req, res) => {
  try {
    const readDataBackend = await sellerModel.find({});
    res.status(200).send(readDataBackend);
  } catch (error) {
    console.log(error);
  }
});

const readFoodData = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const findDataId = await sellerModel.findById(id);
  res.status(200).send(findDataId);
});

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  foodSeller,
  readData,
  readFoodData,
};

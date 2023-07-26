const UserModel = require("../model/UserModel");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

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
    pic,
  });

  if (createUser) {
    // console.log(createUser);
    res.send("user successfully created");
  } else throw new Error();
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const loginUser = await UserModel.findOne({ email, password });

  if (loginUser) {
    res.status(200).send("login successfull");
  } else res.status(400).send("please check you email again");
});

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { newPassword } = req.body;

  try {
    const updateUser = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(updateUser);
  } catch (error) {
    console.log(error);
  }
});

module.exports = { registerUser, loginUser, updateUser };

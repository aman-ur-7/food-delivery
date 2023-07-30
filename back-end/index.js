const express = require("express");
const App = express();
const dotEnv = require("dotenv");
const userRoutes = require("./routes/UserRoutes");
const Data = require("./config/Data");
const cors = require("cors");

App.use(cors());
App.use(express.json());
dotEnv.config();
Data();

const PORT = process.env.PORT;

App.use("/user", userRoutes);

App.post("/", (req, res) => {
  res.send("the post");
});

App.listen(PORT, () => {
  console.log("server is started");
});

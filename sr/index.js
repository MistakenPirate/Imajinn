require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const User = require("./model/user");
const userRoutes = require("./router/userRouter")

const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://localhost:27017/imajinn").then(() => {
  console.log("Database connected");
});

app.use('/',userRoutes)

app.listen(3000, () => {
  console.log("server started at port 3000");
});

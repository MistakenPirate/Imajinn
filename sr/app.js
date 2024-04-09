require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./router/userRouter")
const URL = process.env.MONGO_URL

const app = express();

const corsOptions = {
  origin: 'https://incomparable-arithmetic-46dff4.netlify.app/', // Update this with your frontend URL
};

app.use(express.json());
app.use(cors(
  corsOptions
));


// Connect to MongoDB Atlas
mongoose.connect(URL)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

const PORT = process.env.PORT || 3000


// mongoose.connect("mongodb://localhost:27017/imajinn").then(() => {
//   console.log("Database connected");
// });
// mongoose.connect(`mongodb+srv://mistakenpirate38:${password}@imajinn.e2ej7gn.mongodb.net/`).then(() => {
//   console.log("Database connected");
// });

app.use('/',userRoutes)

app.listen(PORT, () => {
  console.log("server started at port 3000");
});

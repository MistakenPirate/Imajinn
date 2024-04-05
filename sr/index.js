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

// app.post("/register", async (req, res) => {
//   const { name, username, email, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const user1 = await User.findOne({ username });
//   const user2 = await User.findOne({email});
//   if(!user1 && !user2){
//       const newUser = new User({
//         name,
//         username,
//         email,
//         password: hashedPassword,
//       });
//       await newUser.save();
//       res.status(201).send("User registered successfully");
//   }
//   else{
//     res.status(400).send("User Already Exists")
//   }
// });

// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const user = User.findOne({ username });
//   try {
//     if (user) {
//       const match = await bcrypt.compare(password, user.password);
//       if (match) {
//         const token = jwt.sign({ email: user.email }, JWT_SECRET);
//         res.json({ token });
//       } else {
//         res.status(401).send("Invalid email or password");
//       }
//     } else {
//       res.status(401).send("User not found");
//     }
//   } catch (err) {
//     console.error("Error logging in user:", error.message);
//     res.status(500).send("Internal server error");
//   }
// });

// app.get("/profile", authenticateToken, async (req, res) => {
//   try {
//     const user = await User.findOne({ username: req.user.username });
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).send("User not found");
//     }
//   } catch (error) {
//     console.error('Error fetching user profile',error.message)
//     res.status(500).send('Internal Server Error')
//   }
// });

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, JWT_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }

app.use('/',userRoutes)

app.listen(3000, () => {
  console.log("server started at port 3000");
});

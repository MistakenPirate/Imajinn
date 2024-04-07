const User = require('../model/user')
const JWT_SECRET = process.env.JWT_SECRET
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.getUser = async (req, res) => {
  try {
      // Extract user information from the JWT token
      const token = req.headers.authorization.split(" ")[1];
      // res.send(token)
      const decodedToken = jwt.verify(token, JWT_SECRET);
      const username = decodedToken.username;

      // Find the user using the decoded username
      const user = await User.findOne({ username });

      if (user) {
          res.json(user);
      } else {
          res.status(404).send("User not found");
      }
  } catch (error) {
      console.error('Error fetching user profile', error.message);
      res.status(500).send('Internal Server Error');
  }
}

exports.registerUser = async (req, res) => {
    const { name, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user1 = await User.findOne({ username });
    const user2 = await User.findOne({email});
    if(!user1 && !user2){
        const newUser = new User({
          name,
          username,
          email,
          password: hashedPassword,
        });
        await newUser.save();
        const token = jwt.sign({ username: newUser.username }, JWT_SECRET);
        res.status(201).send({token,message:"User Registered Successfully"});
    }
    else{
      res.status(400).send("User Already Exists")
    }
  }

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    try {
      if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          const token = jwt.sign({ username: user.username }, JWT_SECRET);
          res.json({ token });
        } else {
          res.status(401).send("Invalid email or password");
        }
      } else {
        res.status(401).send("User not found");
      }
    } catch (err) {
      console.error("Error logging in user:", err.message);
      res.status(500).send("Internal server error");
    }
  }
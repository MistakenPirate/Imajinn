const User = require('../model/user')
const JWT_SECRET = "qwertymnbvcasdfglkjhg";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.getUser = async (req, res) => {
    try {
      const user = await User.findOne({ username: req.user.username });
      if (user) {
        res.json(user);
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      console.error('Error fetching user profile',error.message)
      res.status(500).send('Internal Server Error')
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
        res.status(201).send("User registered successfully");
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
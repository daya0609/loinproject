// controllers/user.controller.js
const User = require('../models/user.model');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send('User registered');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({username, password });
        if (user?._id) {
            console.log("user",user)
            res.status(200).send('Login successful');
        } else {
            console.log("User not match");
            
            res.status(400).send('Invalid credentials');
        }
    }catch (error) {
        res.status(500).send(error.message);
    }
};

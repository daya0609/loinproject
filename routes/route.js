// routes/route.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Register route
router.post('/register',(req,res)=> userController.register(req,res));

// Login route
router.post('/login',(req,res)=> userController.login(req,res));


module.exports = router;

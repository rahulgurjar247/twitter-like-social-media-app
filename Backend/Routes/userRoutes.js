const express = require("express");
const { handleSignup, handleSignin } = require("../controller/userControlar");

const userRoute = express.Router();

// userlogin / signUp
userRoute.post("/signup", handleSignup);
userRoute.post("/signin", handleSignin);

module.exports = userRoute;

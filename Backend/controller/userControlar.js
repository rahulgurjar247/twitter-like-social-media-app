const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function handleSignup(req, res) {
  const { username, email, password } = req.body;
  try {
    const exitingUser = await User.findOne({ email });
    if (!exitingUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({ username, email, password: hashedPassword });
      console.log("user create sucessfully");
      res.json({
        msg: "user crate successfully",
        success: true,
      });
    } else {
      console.log("user allready exit");
      res.json({
        msg: "user already exit",
        success: false,
      });
    }
  } catch (error) {
    console.log("error he bhai", error);
    res.json({
      msg: "something wrong",
      success: false,
    });
  }
}

async function handleSignin(req, res) {
  console.log("login request");
  const { email, password } = req.body;
  const exitingUser = await User.findOne({ email });
  if (exitingUser && (await bcrypt.compare(password, exitingUser.password))) {
    const jwttoken = await jwt.sign(
      {
        username: exitingUser.username,
        password: exitingUser.password,
      },
      process.env.JWT_Secret_key
    );
    res.cookie("uid", jwttoken);
    res
      .json({
        jwt: jwttoken,
        msg: "user login success",
        success: true,
      })
      .status(200);
  } else {
    res.send({
      msg: "user not valid",
      success: false,
    });
  }
}

module.exports = {
  handleSignup,
  handleSignin,
};

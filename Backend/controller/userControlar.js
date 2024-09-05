const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function handleSignup(req, res) {
  const username = "gurjar";
  const email = "rahulgurjar@gmail.com";
  const password = "12345678";
  const role = "user";

  try {
    const exitingUser = await User.findOne({ email });
    console.log(exitingUser);

    if (!exitingUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({ username, email, role, password: hashedPassword });
      console.log("user create sucessfully");
      res.json({
        msg: "user crate successfully",
      });
    } else {
      console.log("user allready exit");
      res.json({
        msg: "user already exit",
      });
    }
  } catch (error) {
    console.log("error he bhai", error);
    res.json({
      msg: "something wrong",
    });
  }
}

async function handleSignin(req, res) {
  const email = "rahul@gmail.com";
  const password = "12345678";

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

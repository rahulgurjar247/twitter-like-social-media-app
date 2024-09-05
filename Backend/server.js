const express = require("express");
require("dotenv").config();
const connectTOMongo = require("./model/connectToMongo");

const app = express();
const port = process.env.PORT || 8000;

connectTOMongo(process.env.mongo_url)
  .then(() => {
    console.log("connect with mongodb");
  })
  .catch((err) => {
    console.log("server error he:", err);
  });

app.get("/", (req, res) => {
  console.log("get req on server");
  res.json({ msg: "its working fine" });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

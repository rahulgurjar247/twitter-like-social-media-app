const express = require("express");
require("dotenv").config();
const connectTOMongo = require("./model/connectToMongo");
const userRoute = require("./Routes/userRoutes");
const postRoute = require("./Routes/postRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

connectTOMongo(process.env.mongo_url)
  .then(() => {
    console.log("connect with mongodb");
  })
  .catch((err) => {
    console.log("server error he:", err);
  });

const app = express();
const port = process.env.PORT || 8000;

// middleware cors & json
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(bodyParser.json());

app.use("/", userRoute);
app.use("/Posts", postRoute);



// server listening
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

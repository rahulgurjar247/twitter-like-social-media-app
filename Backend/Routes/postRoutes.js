const express = require("express");
const Post = require("../model/postModel");
let id = 1;
const postRoute = express.Router();
const {
  handlePostCreate,
  handlePostUpdate,
  handleGetAllPost,
  handlePostDelete,
} = require("../controller/postControllar.js");

postRoute.post("/new", handlePostCreate);

// get all post from databases access to everybody
postRoute.get("/", handleGetAllPost);

// update post -> need validation isUser authorizid for update
postRoute.put("/update/:postid", handlePostUpdate);

// delete route -> need validation is this post create by same user or not
postRoute.delete("/delete/:postid", handlePostDelete);

module.exports = postRoute;

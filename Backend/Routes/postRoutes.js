const express = require("express");
const Post = require("../model/postModel");
let id = 1;
const postRoute = express.Router();

postRoute.post("/new", async (req, res) => {
  const postid = id++;
  const createby = "66d9d877e09c53dbcf00b0d2";
  const postdata =
    "hello i am rahul gurjar i am working on my fullstack skill , i know javascript , react ,express, nodejs , and many more i am doing very good && i definatily get a good job";
  likes = 100;
  try {
    const postExits = await Post.findOne({ postid });
    if (!postExits) {
      await Post.create({ postid, createby, postdata, likes });
      console.log("Post create sucessfully");
      res.json({
        msg: "user crate successfully",
        success: true,
      });
      return;
    }

    res.json({
      msg: "post already exits",
      success: false,
    });
  } catch (error) {
    res.json({
      msg: "something is wrong with post creation",
      success: false,
    });
  }
});

// get all post from databases access to everybody
postRoute.get("/", (req, res) => {});

// update post -> need validation isUser authorizid for update
postRoute.put("/update", (req, res) => {});

// delete route -> need validation is this post create by same user or not
postRoute.delete("/delete/:postid", (req, res) => {});

module.exports = postRoute;

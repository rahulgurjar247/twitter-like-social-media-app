const Post = require("../model/postModel");

async function handlePostCreate(req, res) {
  const {
    postdata,
    postid = Math.floor(Math.random() * 1000000 + 1),
    createby = "66d9d877e09c53dbcf00b0d2",
  } = req.body;

  try {
    await Post.create({ postid, createby, postdata });
    console.log("Post create sucessfully");
    res
      .json({
        msg: "Post create successfully ",
        success: true,
      })
      .status(201);
    return;
  } catch (err) {
    console.log("error message", err);
    res.json({
      msg: "something is wrong with post creation",
      err,
      success: false,
    });
  }
}

async function handleGetAllPost(req, res) {
  const posts = await Post.find();
  if (!posts) {
    res
      .json({
        msg: "server side error",
        success: false,
      })
      .status(500);
  }
  res.json({
    posts,
    msg: "get all post routes",
    success: true,
  });
}

async function handlePostUpdate(req, res) {
  res.json({
    msg: "update post routes",
  });
}
async function handlePostDelete(req, res) {
  res.json({
    msg: "delete post routes",
  });
}

module.exports = {
  handlePostCreate,
  handlePostUpdate,
  handleGetAllPost,
  handlePostDelete,
};

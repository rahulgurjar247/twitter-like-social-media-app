const Post = require("../model/postModel");
async function handlePostCreate(req, res) {
  const { postid, postdata, createby, likes } = {
    postid: Math.floor(Math.random() * 1000000 + 1),
    createby: "66d9d877e09c53dbcf00b0d2",
    postdata:
      "rahul gurjar is hear do you know that i am a full stack devloper with expertise in react.js express.js Node.js Mongodb Rest API Problem solving ",
    likes: 100,
  };

  try {
    const postExits = await Post.findOne({ postid });
    if (!postExits) {
      await Post.create({ postid, createby, postdata, likes });
      console.log("Post create sucessfully");
      res
        .json({
          msg: "Post create successfully ",
          success: true,
        })
        .status(201);
      return;
    }
    res.json({
      msg: "post already exits",
      success: false,
    });
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

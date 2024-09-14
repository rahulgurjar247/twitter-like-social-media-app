const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postid: {
    type: String,
    require: true,
    unique: true,
  },
  createby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    require: true,
  },
  postdata: {
    type: String,
    require: true,
  },
  postimage: {
    type: "string",
  },
  likes: {
    type: Number,
    default: 0,
  },
  comment: [
    {
      by: {
        type: mongoose.Schema.Types.ObjectId,
      },
      data: {
        type: String,
      },
    },
  ],
});

const Post = mongoose.model("Posts", postSchema);

module.exports = Post;

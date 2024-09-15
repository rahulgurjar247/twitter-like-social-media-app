import React from "react";
import dev from "../assets/developer.png";
import ProfileImgPost from "./ProfileImgPost";
const Post = ({ postdata = "hello rahul", ...other }) => {
  return (
    <div className="w-full  border-b flex gap-2 p-4 text-gray-600 text-left">
      <ProfileImgPost />
      <div>
        <div className="flex gap-1">
          <div className="user font-semibold">Rahulgurjar</div>
          <div className="username">@rahulgurjar247</div>
        </div>
        <div className="postdata ">{postdata.substring(0, 150)}</div>
        <div className="panel flex justify-between mt-3">
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
        </div>
      </div>
    </div>
  );
};

export default Post;

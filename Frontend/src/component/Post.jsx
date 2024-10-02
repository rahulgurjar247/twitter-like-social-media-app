import React from "react";
import dev from "../assets/developer.png";
import ProfileImgPost from "./ProfileImgPost";
import likeImage from "../assets/like.png";
import comment from "../assets/comment.png";
import shareImage from "../assets/share.png";
import retweetImage from "../assets/retweet.png";
import saveImage from "../assets/save.png";

const Post = ({ postdata = "hello rahul", ...other }) => {
  return (
    <div className="w-full border-b border-b-[#AABBC2] flex gap-2 p-4  text-left overflow-hidden ">
      <div className="w-10">
        <ProfileImgPost />
      </div>
      <div className="w-full">
        <div className="flex gap-1 ">
          <div className="user font-semibold">Rahulgurjar</div>
          <div className="username">@rahulgurjar247</div>
        </div>
        <div className="postdata ">{postdata.substring(0, 150)}</div>
        <div className="panel flex justify-between mt-3 items-center [&>div>div]:hover:cursor-pointer">
          <div className="flex flex-col items-center">
            <div className="text-red-800 text-3xl">
              <img src={comment} className="w-6" />
            </div>
            <div>50</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-red-800 text-3xl">
              <img src={retweetImage} className="w-7" />
            </div>
            <div>50</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-red-800 text-3xl">
              {" "}
              <img src={likeImage} className="w-6" />
            </div>
            <div>50</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-red-800 text-3xl">
              {" "}
              <img src={saveImage} className="w-6" />
            </div>
            <div>50</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-red-800 text-3xl">
              {" "}
              <img src={shareImage} className="w-6" />
            </div>
            <div>50</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

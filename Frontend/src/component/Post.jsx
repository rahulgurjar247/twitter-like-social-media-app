import React from "react";
import dev from "../assets/developer.png";
import ProfileImgPost from "./ProfileImgPost";
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
            <div className="text-red-800 text-3xl"> &#9829;</div>
            <div>50</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-red-800 text-3xl"> &#9828;</div>
            <div>50</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-red-800 text-3xl"> &#9827;</div>
            <div>50</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-red-800 text-3xl"> &#9825;</div>
            <div>50</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-red-800 text-3xl"> &#9824;</div>
            <div>50</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

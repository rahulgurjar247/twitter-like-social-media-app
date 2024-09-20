import React, { useCallback, useRef, useState } from "react";
import { debounce } from "lodash";
import ProfileImgPost from "./ProfileImgPost";
import axios from "axios";

const PostEditor = () => {
  const [post, setPost] = useState({
    postdata: "",
    postImage: "",
  });
  const Message = useRef();

  const handlepostSubmit = async (e) => {
    console.log("post submit call");
    e.preventDefault();
    try {
      if (validatePost()) {
        console.log(post.postdata);
        const response = await axios.post(
          "http://localhost:3000/posts/new",
          post,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        Message.current.value = "";
        alert("sent successfully");
      } else {
        throw "validation failed";
      }
    } catch (err) {
      console.log("error:", err.message);
    }
  };

  function validatePost() {
    if (post.postdata.length < 2) {
      return false;
    }
    return true;
  }

  const handlePost = (e) => {
    e.preventDefault();
    setPost({ ...post, [e.target.name]: e.target.value });
    // console.log(post.postdata);
  };
  return (
    <div className="flex w-full p-4 gap-2 text-left border-b pb-0 pr-0">
      <div className="w-10 ">
        <ProfileImgPost />
      </div>
      <div className="w-full  flex flex-col text-left ">
        <div className="w-full  border-b">
          <textarea
            name="postdata"
            id="writeMessage"
            className="w-full h-auto outline-none resize-none overflow-hidden"
            spellCheck="false"
            ref={Message}
            value={post.postdata}
            onChange={handlePost}
          ></textarea>
        </div>
        <div className="">
          <div className="p-2 flex items-center gap-2 justify-end pl-4 hover:cursor-default">
            <div className=" rounded-3xl w-auto  px-2 bg-blue-700">Img</div>
            <div
              className=" rounded-3xl w-auto px-2  bg-blue-700"
              onClick={handlepostSubmit}
            >
              Post
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;

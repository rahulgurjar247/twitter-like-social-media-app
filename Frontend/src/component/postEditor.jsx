import React, { useCallback, useRef, useState } from "react";
import { debounce } from "lodash";
import ProfileImgPost from "./ProfileImgPost";
import axios from "axios";
import SelectImg from "../assets/imgSend.png";

const PostEditor = () => {
  const [post, setPost] = useState({
    postdata: "",
    postImage: "",
  });
  const Message = useRef();
  const [image, setImage] = useState(null);

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

  const handleImageSubmit = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageClick = () => {
    document.getElementById("Imginput").click();
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
            className="w-full outline-none resize-none font-mono focus:outline-none"
            spellCheck="false"
            ref={Message}
            value={post.postdata}
            onChange={handlePost}
            placeholder="What's happening?"
          ></textarea>
          <div>
            {image && (
              <img
                src={image}
                className="w-3/5 h-40 rounded-lg overflow-hidden mb-2"
                alt=""
              />
            )}
          </div>
        </div>
        <div className="">
          <div className="p-2 flex items-center gap-2 justify-end pl-4 hover:cursor-default">
            <div className=" rounded-3xl w-auto  px-2 ">
              <input
                type="file"
                name="Imginput"
                id="Imginput"
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleImageSubmit}
              />
              <img
                src={SelectImg}
                alt="CLick to upload image"
                onClick={handleImageClick}
              />
            </div>
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

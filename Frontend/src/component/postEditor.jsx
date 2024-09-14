import React, { useCallback, useRef, useState } from "react";
import { debounce } from "lodash";
import ProfileImgPost from "./ProfileImgPost";

const PostEditor = () => {
  const [post, setPost] = useState({
    postdata: "",
    postImage: "",
  });
  const Message = useRef();
  const handlePost = useCallback(
    debounce((value, name) => {
      setPost((prevPost) => {
        const updatedPost = {
          ...prevPost,
          postdata: value,
        };
        console.log("hyy");
        console.log(post);
      });
    }, 500),
    []
  );
  return (
    <div className="flex w-full p-4">
      <div className="w-7">
        <ProfileImgPost />
      </div>
      <div className="w-full border-b flex flex-col text-left pl-2">
        <div className="w-full  border-b">
          <textarea
            name="postdata"
            id="writeMessage"
            className="w-full h-auto outline-none resize-none overflow-hidden"
            spellCheck="false"
            ref={Message}
            onChange={(e) => handlePost(e.target.value, e.target.name)}
          ></textarea>
        </div>
        <div className="">
          <div className="p-2 flex items-center gap-2 justify-end pl-4 hover:cursor-default">
            <div className=" rounded-3xl w-auto  px-2 bg-blue-700">img</div>
            <div className=" rounded-3xl w-auto px-2  bg-blue-700">send</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;

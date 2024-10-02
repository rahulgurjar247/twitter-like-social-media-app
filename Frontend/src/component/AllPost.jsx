import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../component/Post";
import PostEditor from "../component/postEditor";

const AllPost = () => {
  const [postdata, setPostData] = useState(null);
  const [loding, setloding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setPostData(response.data.posts);
        consle.log();
      } catch (err) {
        setError(err.message);
      } finally {
        setloding(false);
      }
    };
    fetchData();
  }, []);

  console.log(postdata);

  return (
    <div
      className="w-[45%] text-center ml-[calc(25%)]  
         max-md:w-[calc(100%-20%)] z-10  border-l border-r overflow-x-hidden"
    >
      <PostEditor />
      {postdata &&
        postdata.map((p) => {
          return <Post postdata={p.postdata} key={p._id} />;
        })}
      <Post />
    </div>
  );
};

export default AllPost;

import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import Post from "../component/Post";
import PostEditor from "../component/postEditor";
import Sidebar from "../component/Sidebar";

const Home = () => {
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
    <div className="flex flex-row min-h-screen w-[calc(100vw)]    ">
      <Sidebar />
      <div
        className="w-[calc(45%)] text-center ml-[calc(25%-2px)]  
         max-md:w-[calc(100%-20%)] z-10  border-l border-r"
      >
        <PostEditor />
        {postdata &&
          postdata.map((p) => {
            return <Post postdata={p.postdata} key={p._id} />;
          })}
        <Post />
      </div>

      <div className="inline-block fixed ml-[calc(100%-40%)]  text-center w-[calc(100%-60%)] max-md:hidden z-0">
        {" "}
        Side area to show trending post
      </div>
    </div>
  );
};

export default Home;

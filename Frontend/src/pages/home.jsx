import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import Post from "../component/Post";
import PostEditor from "../component/postEditor";

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
    <div className="flex flex-row h-[100vh] w-[calc(100vw-4px)]  ">
      <div className="w-[20%] text-center pt-10 p-2 flex flex-col gap-6  bg-slate-300 overflow-hidden font-semibold fixed h-[100vh] cursor-default">
        <div className="">Logo</div>
        <div className="">Home</div>
        <div className="">Explore</div>
        <div className="">Notification</div>
        <div className="">Message</div>
        <div className="">Grok</div>
        <div className="">Profile</div>
        <div className="">More</div>
        <div className="bg-blue-800  rounded-2xl p-1"> Post </div>
        <div className="overflow-hidden ">
          <img src="" alt="" />
          <div>
            <h4 className="font-semibold">Rahul gurjar</h4>
            <h3>@username</h3>
          </div>
        </div>
      </div>

      <div
        className="w-[40%] text-center ml-[calc(20%)]
         max-md:w-[calc(100%-20%)] z-10 overflow-y-scroll"
      >
        <PostEditor />
        {postdata &&
          postdata.map((p) => {
            return <Post postdata={p.postdata} key={p._id} />;
          })}
        <Post />
      </div>

      <div className="bg-slate-50 inline-block fixed ml-[calc(100%-40%)]  text-center w-[calc(100%-60%)] max-md:hidden z-0">
        {" "}
        Side area to show trending post
      </div>
    </div>
  );
};

export default Home;

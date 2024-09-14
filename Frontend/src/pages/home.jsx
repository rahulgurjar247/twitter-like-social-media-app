import React from "react";
import Post from "../component/Post";
import PostEditor from "../component/postEditor";

const Home = () => {
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
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
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

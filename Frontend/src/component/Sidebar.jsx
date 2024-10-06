import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[25%] text-center pt-5 p-2 font-semibold fixed h-[100vh] cursor-default z-50 flex justify-center">
      <div className="w-[70%] flex flex-col gap-5">
        <Logo />
        <div className="">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="">
          <Link to={"explore"}>Explore</Link>
        </div>
        <div className="">
          <Link to={"notification"}>Notification</Link>
        </div>
        <div className="">
          <Link to={"message"}>Message</Link>
        </div>
        <div className="">Grok</div>
        <div className="">
          <Link to={"profile"}>Profile</Link>
        </div>
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
    </div>
  );
};

export default Sidebar;

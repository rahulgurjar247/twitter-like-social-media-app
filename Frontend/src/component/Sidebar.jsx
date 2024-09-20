import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[25%] text-center pt-5 p-2    overflow-hidden font-semibold fixed h-[100vh] cursor-default z-50 flex justify-center">
      <div className="w-[70%] flex flex-col gap-5">
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
    </div>
  );
};

export default Sidebar;

import React from "react";
import image from "../assets/letter-c.png";
const Logo = () => {
  return (
    <div className="flex items-center justify-center ">
      <img src={image} className="w-10" />
      <span className="text-3xl">omrade</span>
    </div>
  );
};

export default Logo;

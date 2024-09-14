import React from "react";
import devloper from "../assets/developer.png";
const ProfileImgPost = ({ imgSrc = devloper }) => {
  return (
    <div>
      <img src={imgSrc} className="w-24 rounded-xl" />
    </div>
  );
};

export default ProfileImgPost;

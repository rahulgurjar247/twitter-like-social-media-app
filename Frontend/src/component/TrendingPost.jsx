import React from "react";

const TrendingPost = () => {
  return (
    <div className=" fixed ml-[calc(100%-30%)]  text-left w-[calc(100%-70%)] max-md:hidden z-0">
      <div className="w-[80%] m-auto ">
        <div className="w-full border-[1px] rounded-2xl p-4 mt-7">
          <h1>What's happening</h1>
          <div className="flex justify-between mt-3 items-center">
            <div className="font-thin text-sm">Computer Science Trending</div>
            <div>...</div>
          </div>
          <div>#RahulGurjar</div>
          <div>
            <span>Trending with</span>{" "}
            <span className="text-blue-800">#Microsoft, #Ceo, #Founder</span>
          </div>
          <div className="flex justify-between mt-3 items-center">
            <div className="font-thin text-sm">Trending in india</div>
            <div>...</div>
          </div>
          <div>#RahulGurjar</div>
          <div>
            <span>Trending with</span>{" "}
            <span className="text-blue-800">#Microsoft, #Ceo, #Founder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingPost;

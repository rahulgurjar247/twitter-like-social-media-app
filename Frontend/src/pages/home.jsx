import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import AllPost from "../component/AllPost";
import Sidebar from "../component/Sidebar";
import TrendingPost from "../component/TrendingPost";
import { Outlet, Route, Routes } from "react-router-dom";
import FollowRecommend from "../component/FollowRecommend";

const Home = () => {
  return (
    <div className="flex flex-row min-h-screen w-[calc(100vw)]    ">
      <Sidebar />
      <Outlet />
      {/* <Routes>
        <Route path="" element={<AllPost />}></Route>
        <Route path="explore" element={<div>Hello rahul gurjar</div>}></Route>
      </Routes>
      <TrendingPost /> */}
    </div>
  );
};

export default Home;

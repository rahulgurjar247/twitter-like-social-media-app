import Navbar from "./navbar/navbar";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { useEffect } from "react";
import AllPost from "./component/AllPost";
// import jwt from "jsonwebtoken";

function App() {
  useEffect(() => {
    const cookiedata = window.document.cookie;
    const cookie = cookiedata.split("=")[1];
    // const userdata = jwt.verify(cookie, "Commando247@");
    // console.log(userdata);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<AllPost />} />
          <Route path="/explore" element={<div>Hello explore </div>} />
          <Route
            path="/notification"
            element={<div>Hello i am notifiation </div>}
          />
          <Route path="/message" element={<div>Hello i am Message</div>} />
          <Route path="/Profile" element={<div>Hello i am Profiles </div>} />
          <Route />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        pauseOnHover
        draggable
      />
    </>
  );
}

export default App;

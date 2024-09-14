import Navbar from "./navbar/navbar";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { useEffect } from "react";
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
        <Route path="/" element={<Home />} />
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

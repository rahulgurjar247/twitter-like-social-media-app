import React, { useRef } from "react";
import { toast } from "react-toastify";
import { useState } from "react";

const Signup = () => {
  const [signupdata, setsignupdata] = useState({
    email: "",
    username: "",
    password: "",
  });
  const username = useRef();
  const email = useRef();
  const password = useRef();

  const handleFormChange = (e) => {
    e.preventDefault();
    setsignupdata({
      ...signupdata,
      [e.target.name]: e.target.value,
    });
  };

  function formValidation() {
    if (signupdata.email == "" || signupdata.password == "") {
      toast("cannot submit empty form", {
        progress: 5000,
        // autoClose: 5000,
        position: "top-center",
      });
      return false;
    } else if (signupdata.password.length < 8) {
      toast("password can't be less than 8");
      return false;
    }
    return true;
  }
  function Formclear() {
    username.current.value = "";
    password.current.value = "";
    email.current.value = "";
    (signupdata.email = ""),
      (signupdata.username = ""),
      (signupdata.password = "");
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formValidation()) {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log(signupdata);
            resolve();
          }, 2000);
        });
        Formclear();
      } else {
        return Error("form is Empty");
      }
    } catch (err) {
      console.log("something is wrong with form submittion", err);
      toast("something is wrong with form submittion", {
        autoClose: true,
      });
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-green-50 flex justify-center pt-24 font-mono ">
      <div className=" w-80 p-2 flex flex-col gap-3 ">
        <h1 className="text-center font-medium text-3xl">Signup</h1>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              name="username"
              className=" bg-inherit outline-none no-underline border-b-2 border-black"
              onChange={handleFormChange}
              ref={username}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className=" bg-inherit outline-none no-underline border-b-2 border-black"
              onChange={handleFormChange}
              ref={email}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              className="outline-none no-underline border-b-2 border-black bg-inherit"
              onChange={handleFormChange}
              ref={password}
            />
          </div>

          <div className="flex flex-col gap-2 text-center">
            <button
              className="bg-blue-200 rounded-md w-full p-1"
              onClick={handleFormSubmit}
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

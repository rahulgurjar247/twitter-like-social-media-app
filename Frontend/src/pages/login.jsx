import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setlogin, removelogin } from "../feature/islogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loding, setloding] = useState(false);
  const email = useRef();
  const password = useRef();
  const islogin = useSelector((state) => state.islogin.islogin);
  const dispatch = useDispatch();

  const handleFormChange = (e) => {
    e.preventDefault();
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  function Formclear() {
    password.current.value = "";
    email.current.value = "";
    (loginData.email = ""), (loginData.password = "");
  }

  function formValidation() {
    if (loginData.email == "" || loginData.password == "") {
      toast("cannot submit empty form", {
        progress: 5000,
        // autoClose: 5000,
        position: "top-center",
      });
      return false;
    } else if (loginData.password.length < 8) {
      toast("password can't be less than 8");
      return false;
    }
    return true;
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formValidation()) {
        setloding(true);
        const response = await axios({
          method: "post",
          url: "http://localhost:3000/signin",
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify(loginData),
        });
        console.log(response.data);
        if (response.data.success) {
          dispatch(setlogin());
          navigate("/");
        }
        console.log(islogin);
        Formclear();
      } else {
        return Error("form is Empty");
      }
    } catch (err) {
      console.log("something is wrong with form submittion", err);
      toast("something is wrong with form submittion", {
        autoClose: true,
      });
    } finally {
      setloding(false);
    }
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-green-50 flex justify-center pt-36 font-mono ">
        <div className=" w-80 p-2 flex flex-col gap-3 ">
          <h1 className="text-center font-medium text-3xl">login </h1>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label htmlFor="email">Email </label>
              <input
                type="text"
                name="email"
                onChange={handleFormChange}
                ref={email}
                value={loginData.email}
                className=" bg-inherit outline-none no-underline border-b-2 border-black"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                onChange={handleFormChange}
                ref={password}
                value={loginData.password}
                className="outline-none no-underline border-b-2 border-black bg-inherit"
              />
            </div>
            <div className="flex flex-col gap-2 text-center">
              <button
                className="bg-blue-200 rounded-md w-full p-1"
                onClick={handleFormSubmit}
              >
                {loding ? "loding" : "Login"}
              </button>
              <div>
                {" "}
                Don't have a account{" "}
                <span className="text-blue-800">
                  <a href="/signup">Signin</a>{" "}
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

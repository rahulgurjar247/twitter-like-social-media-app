import React from "react";

const Signup = () => {
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
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className=" bg-inherit outline-none no-underline border-b-2 border-black"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              className="outline-none no-underline border-b-2 border-black bg-inherit"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="text"
              name="Confirm password"
              className="outline-none no-underline border-b-2 border-black bg-inherit"
            />
          </div>
          <div className="flex flex-col gap-2 text-center">
            <button className="bg-blue-200 rounded-md w-full p-1">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

const Login = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-green-50 flex justify-center pt-36 font-mono ">
        <div className=" w-80 p-2 flex flex-col gap-3 ">
          <h1 className="text-center font-medium text-3xl">login</h1>
          <form className="flex flex-col gap-6">
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
            <div className="flex flex-col gap-2 text-center">
              <button className="bg-blue-200 rounded-md w-full p-1">
                Login
              </button>
              <div>
                {" "}
                Don't have a account{" "}
                <span className="text-blue-800">
                  <a href="/signup">Signup</a>{" "}
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

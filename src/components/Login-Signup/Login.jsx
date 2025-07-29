import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
const Login = ({setView}) => {
  return (
    <div className="h-[90vh] bg-blue-800 flex items-center justify-center">
      <div className="flex flex-col justify-between items-center bg-white  p-[20px] md:p-[30px] border-4 border-blue-200 shadow-lg w-xs  md:w-md  m-4 ">
        <h2 className="mb-8 text-2xl md:4xl">Welcome Back</h2>
        <form action="submit" className="flex flex-col w-[100%]">
          <div className="mb-4 flex border-2 md:gap-2 border-gray-500 rounded-2xl">
            <label htmlFor="email" className="p-3">
              <MdEmail />
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="outline-none w-[80%] rounded-r-2xl py-1.5"
              required
            />
          </div>
          <div className="mb-8 flex border-2 md:gap-2 border-gray-500 rounded-2xl ">
            <label htmlFor="password" className="p-3">
              <RiLockPasswordLine />
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="outline-none w-[70%] rounded-r-2xl py-1.5 "
              required
            />
          </div>

          <button
            action="submit"
            className="border-blue-700 bg-blue-700 border-1 text-white rounded-md px-[10px] py-[5px] cursor-pointer mb-3"
          >
            Log In
          </button>
        </form>
        <div className="mb-3">
          <a href="#" className="text-blue-700 ">
            Forgot your Password?
          </a>
        </div>
        <p>
          Don't have an account?{" "}
          <span
            className="text-blue-700 cursor-pointer"
            onClick={() => setView('signup')}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

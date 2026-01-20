import { MdAccountCircle } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import {useDispatch} from "react-redux";
import {login, logout} from "../../features/auth/authSlice.js";
import axios from "axios";
import { useState } from "react";
const Login = ({setView}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleUsername = (e)=>{
    setUsername(e.target.value)
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }


  const sendData = async(e)=>{
    e.preventDefault();

    try{
      const {data} = await axios.post("/api/v1/users/login",{
        username : username,
        password: password
      });
      dispatch(login(username));
      // console.log("Data from Login.jsx: ", data);

    }
    catch(error){
      console.log("Error from Login.jsx: ", error);
    }
  }

  return (
    <div className="h-[90vh] bg-blue-800 flex items-center justify-center">
      <div className="flex flex-col justify-between items-center bg-white  p-[20px] md:p-[30px] border-4 border-blue-200 shadow-lg w-xs  md:w-md  m-4 ">
        <h2 className="mb-8 text-2xl md:4xl">Welcome Back</h2>
        <form onSubmit={sendData} className="flex flex-col w-[100%]">
          <div className="mb-4 flex border-2 md:gap-2 border-gray-500 rounded-2xl">
            <label htmlFor="username" className="p-3">
              <MdAccountCircle />
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsername}
              placeholder="Username"
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
              value={password}
              onChange={handlePassword}
              placeholder="Password"
              className="outline-none w-[70%] rounded-r-2xl py-1.5 "
              required
            />
          </div>

          <button
          type="submit"
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

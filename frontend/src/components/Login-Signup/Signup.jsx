import { useState } from "react";
import axios from "axios";
import { MdEmail,MdAccountCircle } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Signup = ({setView}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e)=>{
    setUsername(e.target.value)
  }
  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
      const {data} = await axios.post("/api/v1/users/register", {
        username: username,
        email: email,
        password: password
      })
      setUsername("");
      setEmail("");
      setPassword("");
      // console.log("Response from SignUp.jsx: ", data);
    }
    catch(error){
      console.log("Error from Signup.jsx: ", error.message);
    }


  }

  return (
    <div className="h-[90vh] bg-blue-800 flex items-center justify-center">
      <div className="flex flex-col justify-between items-center bg-white  p-[20px] md:p-[30px] border-4 border-blue-200 shadow-lg w-xs  md:w-md  m-4">
        <h2 className="mb-8 text-2xl md:4xl">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col w-[100%]">
        <div className="mb-4 flex border-2 md:gap-2 border-gray-500 rounded-2xl">
            <label htmlFor="username" className="p-3">
              <MdAccountCircle  />
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
          <div className="mb-4 flex border-2 md:gap-2 border-gray-500 rounded-2xl">
            <label htmlFor="email" className="p-3">
              <MdEmail />
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmail}
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
              value={password}
              onChange={handlePassword}
              placeholder="Password"
              className="outline-none w-[70%] rounded-r-2xl py-1.5 "
              required
            />
          </div>

          <button
            action="submit"
            className="border-blue-700 bg-blue-700 border-1 text-white rounded-md px-[10px] py-[5px] cursor-pointer mb-3"
          >
            Sign Up
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <a href="#" className="text-blue-700 " onClick={() => setView('login')}>
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

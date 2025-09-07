import React from "react";
import { IoSearch } from "react-icons/io5";

const Header = ({ setView }) => {
  return (
    <div className="flex items-center max-w-full bg-white py-3 px-[20px] md:px-[70px] justify-between h-[10vh] border-b-2 border-slate-600">
      <div className="flex items-center gap-8">
        <span
          className="text-gray-600 text-2xl font-mono cursor-pointer"
          onClick={() => {
            setView("home");
          }}
        >
          Stackit
        </span>
        <div>
          <ul className="flex items-center gap-4">
            <li className="list-none hover:bg-gray-200 px-2 py-1 rounded-lg">About</li>
            <li className="list-none hover:bg-gray-200 px-2 py-1 rounded-lg">Products</li>
          </ul>
        </div>
      </div>
      <div className="search w-[50vw] px-2 border-1 border-black rounded-lg">
        <div className="search-wrap flex items-center ">
          <span>
            <IoSearch size={22}/>
          </span>
          <input className="w-[100%]  px-2 py-1 text-[17px] rounded-lg outline-none" type="text" placeholder="search" name="" id="" />
        </div>
      </div>
      {/* credentials : login, sign up, or any other utilities */}
      <div className=" flex items-center gap-3">
        <button
          className="text-blue-700 border-1 border-blue-700  rounded-md px-[10px] py-[5px] cursor-pointer"
          onClick={() => setView("login")}
        >
          Log in
        </button>
        <button
          className="border-blue-700 bg-blue-700 border-1 text-white rounded-md px-[10px] py-[5px] cursor-pointer"
          onClick={() => setView("signup")}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;

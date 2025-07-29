import React from "react";

const Header = ({ setView }) => {
  return (
    <div className="flex items-center max-w-full bg-white py-3 px-[20px] md:px-[70px] justify-between h-[10vh] border-b-2 border-slate-600">
      <div>
        <span
          className="text-gray-600 text-lg font-mono cursor-pointer"
          onClick={() => {
            setView("home");
          }}
        >
          Stackit
        </span>
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

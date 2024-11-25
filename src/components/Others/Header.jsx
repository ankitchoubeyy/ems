import React from "react";
import { IoIosLogOut } from "react-icons/io";

const Header = () => {


  return (
    <div className="flex items-center  justify-between font-semibold py-3 bg-black px-10 shadow fixed top-0 left-0 w-full shadow-emerald-600 ">
      <h1 className="text-2xl">
        Hello, <span className="text-emerald-500">Ankit Choubey 🤠</span>
      </h1>
      <button  className="flex gap-2 text-xl items-center justify-center px-4 py-2 rounded bg-red-500 hover:bg-red-600">
        <IoIosLogOut />
        Log out
      </button>
    </div>
  );
};

export default Header;

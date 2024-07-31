import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa6";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import uixLogo from "../images/uixLogo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-14 h-14  text-amber-500  bg-black opacity-95 sticky">
      <div className="flex gap-8  items-center text-2xl ">
        <div>
          <HiOutlineMenuAlt1 />
        </div>

        <div className="flex justify-center  items-center  gap-2">
          <FaYoutube className="text-2xl text-yellow-100" />
          <span className="text-xl font-bold">U-COnst</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form action="">
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl">
            <div className="flex gap-5 items-center pr-5">
              <input
                type="text"
                placeholder="Search"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl">
              <FaSearch className="text-xl " />
            </button>
          </div>
        </form>

        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <FaMicrophone />
        </div>
      </div>
      <div className="flex gap-5 items-center text-xl">
        <RiVideoAddLine />

        <div className="relative">
          <IoMdNotifications  />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 text-white rounded-full px-1">
            9+
          </span>
        </div>
        <img
          src={uixLogo}
          alt="Profile_logo"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;

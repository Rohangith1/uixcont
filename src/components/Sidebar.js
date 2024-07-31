import React from "react";
import { FaHome, FaHistory } from "react-icons/fa";

import {
  MdOutlineSubscriptions,
  MdLibraryBooks,
  MdWatchLater,
  MdOutlineSlowMotionVideo,
} from "react-icons/md";

import { LuThumbsUp } from "react-icons/lu";

const Sidebar = () => {
  const mainLinks = [
    {
      icon: <FaHome className="text-xl" />,
      name: "Home",
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions className="text-xl" />,
      name: "Subscripstions",
    },
  ];
  const otherLinks = [
    {
      icon: <MdLibraryBooks className="text-xl" />,
      name: "Library",
    },
    {
      icon: <FaHistory className="text-xl" />,
      name: "History",
    },
    {
      icon: <MdWatchLater className="text-xl" />,
      name: "Watch Later",
    },
    {
      icon: <LuThumbsUp className="text-xl" />,
      name: "Liked Video",
    },
  ];
  return (
    <div className="w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen">
      <ul className="flex flex-col border-b-2 border-gray-800">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-zinc-600 ${
                name === "Home" ? "bg-slate-600" : ""
              } rounded-xl `}
            >
              <a href="#" className="flex items-center gap-6">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col border-b-1 border-gray-800">
        {otherLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-zinc-600 ${
                name === "Home" ? "bg-slate-600" : ""
              } rounded-xl `}
            >
              <a href="#" className="flex items-center gap-6">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

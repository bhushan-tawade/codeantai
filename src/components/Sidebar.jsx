/* eslint-disable no-unused-vars */
import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { MdOutlineWbCloudy } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { HiMiniArrowRightStartOnRectangle } from "react-icons/hi2";

const Sidebar = () => {
  return (
    <div className="md:w-64 h-screen bg-white flex flex-col w-full md:h-screen border-r relative">
      <div className="flex justify-between md:justify-around w-full px-4 items-center">
        <div className="flex items-center justify-center gap-4 h-16">
          <img src="/svg/logo.svg" alt="logo" className="w-6" />
          <h1 className="text-lg font-semibold">CodeAnt AI</h1>
        </div>
      </div>
      <div className="bg-white w-full h-fit md:h-[91%] flex flex-col">
        <div className="flex flex-col items-center py-4">
          <span className="mt-2 text-sm border p-2 rounded-xl flex gap-2 items-center">
            <span>UtkarshDhairyaPanwar...</span>
            <FaChevronDown />
          </span>
        </div>
        <nav className="flex-1 px-4 py-2 space-y-2">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium bg-[#1570EF] text-white rounded-lg"
          >
            <span className="flex-shrink-0">
              <HiOutlineHome className="w-6 h-6" />
            </span>
            <span className="ml-3 font-light">Repositories</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <span className="flex-shrink-0">
              <HiOutlineCodeBracket className="w-6 h-6" />
            </span>
            <span className="ml-3 font-light">AI Code Review</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <span className="flex-shrink-0">
              <MdOutlineWbCloudy className="w-6 h-6" />
            </span>
            <span className="ml-3 font-light">Cloud Security</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <span className="flex-shrink-0">
              <HiOutlineBookOpen className="w-6 h-6" />
            </span>
            <span className="ml-3 font-light">How to Use</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <span className="flex-shrink-0">
              <IoSettingsOutline className="w-6 h-6" />
            </span>
            <span className="ml-3 font-light">Settings</span>
          </a>
        </nav>

        <div className="px-4 py-4">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <span className="flex-shrink-0">
              <LuPhone className="w-5 h-5" />
            </span>
            <span className="ml-3 font-light">Support</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <span className="flex-shrink-0">
              <HiMiniArrowRightStartOnRectangle className="w-5 h-5" />
            </span>
            <span className="ml-3">Logout</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

/* eslint-disable no-unused-vars */
import React from "react";

import { FaArrowUpLong } from "react-icons/fa6";

const SighinLeft = () => {
  return (
    <div className="w-1/2 flex items-center justify-center border-solid border-[1px] border-[#e5e7eb] h-screen ">
      <img
        src="/png/logoFaded.png"
        alt="logo"
        className="absolute left-0 bottom-0 w-[300px] aspect-square"
      ></img>
      <div className="boxShadow flex rounded-xl shadowCardAuth -translate-y-[6rem] bg-white flex-col w-full max-w-[400px]">
        <div className="flex gap-2 items-center border-b  p-4">
          <img src="/svg/logo.svg" alt="logo" className="w-6 h-6" />
          <span className="font-semibold">AI to Detect & Autofix Bad Code</span>
        </div>

        <div className="flex gap-4 justify-between items-center p-4">
          <div className="flex flex-col items-center">
            <span className="font-semibold">30+</span>
            <span className="text-sm">Language Support</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">10K+</span>
            <span className="text-sm">Developers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">100K+</span>
            <span className="text-sm">Hours Saved</span>
          </div>
        </div>
      </div>
      <div className="boxShadow flex rounded-xl absolute flex-col gap-2 p-4 px-8 translate-x-[55%] translate-y-[2.5rem]  bg-white">
        <div className="flex gap-10">
          <img src="/svg/GraphAuth.svg" alt="graph" />
          <div className="flex flex-col">
            <div className="flex items-center text-[rgb(0,73,198)]">
              <FaArrowUpLong className="w-5" />
              14%
            </div>
            <div className="font-light text-xs">This week</div>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <span className="font-semibold">Issues Fixed</span>
            <span className="font-semibold text-2xl">500K+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SighinLeft;

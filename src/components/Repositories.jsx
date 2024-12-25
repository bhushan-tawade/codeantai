/* eslint-disable no-unused-vars */
import React from "react";
import { HiMiniArrowPath } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { DataMock } from "../data";
import { useState } from "react";
const Repositories = () => {
  const [filterdData, setFilterdData] = useState(DataMock);

  const handleFilter = (e) => {
    const value = e.target.value;
    const filtered = DataMock.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.language.toLowerCase().includes(value.toLowerCase())
    );
    setFilterdData(filtered);
  };

  return (
    <>
      <div className="w-full h-screen p-2 overflow-scroll overflow-x-hidden">
        <div className="bg-white w-full rounded-xl border flex flex-col">
          <div className="flex flex-col gap-4 border-b p-4">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div className="flex flex-col">
                <span className="font-semibold text-xl">Repositories</span>
                <span className="font-light text-sm">
                  33 total repositories
                </span>
              </div>
              <div className="flex gap-2">
                <button className="flex text-xs items-center p-2 px-4 gap-2 rounded-md border">
                  <HiMiniArrowPath className="size-4" />
                  Refresh All
                </button>
                <button className="flex text-xs items-center p-2 px-4 gap-2 bg-[#1570EF] text-white rounded-md">
                  <GoPlus className="size-4" />
                  Add Repository
                </button>
              </div>
            </div>
            <div>
              <label className="border w-fit rounded-md flex gap-2 items-center px-2 py-2">
                <HiMiniMagnifyingGlass className="size-4 stroke-2" />
                <input
                  placeholder="Search Repositories"
                  className="text-xs w-[200px] placeholder:text-gray-700 outline-none"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col w-full">
            {filterdData.length >= 1 ? (
              filterdData.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col p-4 gap-3 hover:bg-gray-100 ${
                    index !== filterdData.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="flex gap-2 items-center">
                    <span>{item.title}</span>
                    <span className="bg-[#EFF8FF] border border-[#B2DDFF] text-primary text-xs px-2 rounded-full">
                      {item.type}
                    </span>
                  </div>
                  <div className="flex gap-4 md:gap-8 text-sm font-light">
                    <span className="flex items-center gap-2">
                      {item.language}
                      <span className="bg-[#1570EF] p-1 rounded-full"></span>
                    </span>
                    <span className="flex items-center gap-2">
                      <HiOutlineCircleStack className="w-4" />
                      {item.size}
                    </span>
                    <span>{item.updatedAt}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col border-b p-4 gap-3 text-gray-500 text-center">
                Looks like there is no repository to show.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Repositories;

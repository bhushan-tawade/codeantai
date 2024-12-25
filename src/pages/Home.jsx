/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "../components/Sidebar";
import Repositories from "../components/Repositories";

const Home = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <Repositories />
    </div>
  );
};

export default Home;

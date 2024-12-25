/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./pages/Home";
import Sighin from "./pages/Sighin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Sighin />} />
          <Route path="/Dashboard" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

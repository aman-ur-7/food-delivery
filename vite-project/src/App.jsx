import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MainPage from "./Pages/MainPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;

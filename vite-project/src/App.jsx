import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MainPage from "./Pages/MainPage";
import { useNavigate } from "react-router-dom";
import { useData } from "./DataContext";

const App = () => {
  const navigate = useNavigate();
  const { dataFromLogin } = useData("");

  useEffect(() => {
    if (dataFromLogin.status == 200) {
      navigate("/*");
    } else {
      const timer = setTimeout(() => {
        navigate("/mainpage");
      }, 60000);
      return () => clearTimeout(timer);
    }
  }, []);
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

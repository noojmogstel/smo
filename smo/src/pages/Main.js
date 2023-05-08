import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Posting from "./Posting";
import Find from "./Find";
import Profile from "./Profile";

const Main = () => {
  return (
    <div>
      <Header useButton="true"></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posting" element={<Posting />} />
        <Route path="/find" element={<Find />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
       
      </Routes>
      <Nav/>

    </div>
  );
};

export default Main;
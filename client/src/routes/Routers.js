import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Drivers from "../pages/Drivers";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/drivers" element={<Drivers />} /> 
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Routers;

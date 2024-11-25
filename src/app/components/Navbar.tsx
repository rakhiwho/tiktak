"use client";
import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import "./style.css";
import "../globals.css";
import UseContext from "../context/UseContext";
 
function Navbar() {
  
  const path = window.location.pathname;
  return (
    <UseContext>
      <div className=" fixed nav  top-0 bg_photo">
        <Header />
        {path !== "/login" && path !== "/signup" && <Menu />}
      </div>
    </UseContext>
  );
}

export default Navbar;

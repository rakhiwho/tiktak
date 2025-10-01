"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import "../globals.css";
import "../global.css";
import "./style.css";
import UseContext from "../context/UseContext";
import Cookies from "js-cookie";
import Image from "next/image";
import { Friends, Play, User } from "../reactIcons";
import { usePathname, useRouter } from "next/navigation";
function Navbar() {
  const path = usePathname()
  const router = useRouter();
  return (
    <div className="bg-black h-[100vh] w-[65px] flex-col flex items-center  border-r-[2px] border-lime-800  ">
      <div className="flex flex-col  items-center justify-between h-[25vh]">
        <div
          onClick={() => router.push("./home")}
          className=" h-[45px]  w-[45px]  mt-2 rounded-full flex items-center overflow-hidden "
        >
          <Image
            height={100}
            width={100}
            className="  h-[150px]  bg-cover "
            alt="logo.jpg"
            src="/media/logo.jpg"
          />
        </div>
        <div
          onClick={() => router.push("./play")}
          className={` h-[45px]  w-[45px]  justify-center  mt-2  ${
            path == "/play"
              ? "rounded-md green-bg-3"
              : "rounded-full national-bg"
          } flex items-center overflow-hidden `}
        >
          <Play className=" text-[30px] green-txt-1 " />
        </div>
        <div
          onClick={() => router.push("./friends")}
          className={` h-[45px]  w-[45px]  justify-center  mt-2  ${
            path == "/friends"
              ? "rounded-md green-bg-3"
              : "rounded-full national-bg"
          } flex items-center overflow-hidden `}
        >
          <Friends className=" text-[30px] green-txt-1 " />
        </div>
        <div
          onClick={() => router.push("./profile")}
          className={` h-[45px]  w-[45px]  justify-center  mt-2  ${
            path == "/profile"
              ? "rounded-md green-bg-3"
              : "rounded-full national-bg"
          } flex items-center overflow-hidden `}
        >
          <User className=" text-[30px] green-txt-1 " />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

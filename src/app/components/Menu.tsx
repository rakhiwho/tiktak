"use client";

import React, { useContext } from "react";
import { context, IContext } from "../context/UseContext"; // Import the correct context
import Content from "./Content";
import Divider from "./divider";
import "./style.css";
import "./../globals.css";
function Menu() {
  const router = (text : string)=>{
    console.log(text)

  }
  const { dis, setDis } = useContext<IContext>(context);
  return (
    <div className="w-[130px]" onMouseLeave={() => setDis(false)}>
      <div className="sm fixed top-0  ">{dis && <Content />}</div>
      <div className="lg flex flex-col px-6 quick-6 ">
        <Divider css="pr-2 w-[10vw] my-3  h-[0.5px] bg-white  lg " />
        <p
          onMouseEnter={(e) => router(`/${e.target.innerText}`)}
          className="pt-2 hover-bg rounded-md lg "
        >
          profile
        </p>
        <Divider css="pr-2 w-[10vw] my-3  h-[0.5px] bg-white lg " />
        <p onMouseEnter={(e) => router(`/`)} className="hover-bg rounded-md lg">
          home
        </p>
        <Divider css="pr-2 w-[10vw] my-3  h-[0.5px] bg-white lg " />
        <p
          onMouseEnter={(e) => router(`/${e.target.innerText}`)}
          className="hover-bg rounded-md lg"
        >
          play
        </p>
        <Divider css="pr-2 w-[10vw] my-3  h-[0.5px] bg-white lg " />
        <p
          onMouseEnter={(e) => router(`/${e.target.innerText}`)}
          className="hover-bg rounded-md lg"
        >
          scores
        </p>
        <Divider css="pr-2 w-[10vw] my-3  h-[0.5px] bg-white  lg" />
        <p
          onMouseEnter={(e) => router(`/${e.target.innerText}`)}
          className="hover-bg rounded-md lg"
        >
          more
        </p>
        <Divider css="pr-2 w-[10vw] my-3  h-[0.5px] bg-white lg" />
        <p></p>
      </div>
    </div>
  );
}

export default Menu;

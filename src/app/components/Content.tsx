"use client";

import React from "react";
import Divider from "./divider";
function Content() {
  const router = (text: string) => {
    console.log(text);
  };

  return (
    <div className="h-fit rounded-2xl   fixed top-[4vh] bg-4 p-4  overflow-visible">
      <ul className="ml-4 w-[20vw] ">
        <li
          onMouseEnter={(e) => router(`/${e.target.innerText}`)}
          className="py-2 hover-bg"
        >
          profile
        </li>
        <Divider css="" />
        <li onMouseEnter={() => router(`/`)} className="py-2 hover-bg">
          home
        </li>
        <Divider css="" />
        <li
          onMouseEnter={(e) => router(`/${e.target.innerText}`)}
          className="py-2 hover-bg"
        >
          play
        </li>
        <Divider css="" />
        <li
          onMouseEnter={(e) => router(`/${e.target.innerText}`)}
          className="py-2 hover-bg"
        >
          scores
        </li>
        <Divider css="" />
        <li
          onMouseEnter={(e) => router(`/${e.target.innerText}`)}
          className="py-2 hover-bg"
        >
          more
        </li>
        <Divider css="" />
      </ul>
    </div>
  );
}

export default Content;

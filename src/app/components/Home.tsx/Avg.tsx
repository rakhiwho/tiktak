import { User } from "@/app/reactIcons";
import Image from "next/image";
import React from "react";
import Res from "./Res";

function Avg() {
  return (
    <div className="flex flex-col justify-start mt-4  w-[70vw] items-start">
      <div className="flex flex-row items-center justify-center">
        <p className="michroma-4 tracking-[2px] green-txt-1">Game History</p>
      </div>
      <div className=" top-0 left-0 w-full h-[1px] divider bg-slate-700 opacity-50 z-10" />

      <div className="  w-[70vw] h-[45vh] mt-2  flex flex-col items-center overflow-x-hidden overflow-y-scroll ">
        <Res pfp1="" pfp2=""  userName1="progamer_"  userName2="noob_gamer" id1="" id2="" />
        <Res pfp1="" pfp2=""  userName1="progamer_"  userName2="noob_gamer" id1="" id2="" />
        <Res pfp1="" pfp2=""  userName1="progamer_"  userName2="noob_game" id1="" id2="" />
        <Res pfp1="" pfp2=""  userName1="progamer_"  userName2="noob_game" id1="" id2="" />
        <Res pfp1="" pfp2=""  userName1="progamer_"  userName2="noob_game" id1="" id2="" />
        <Res pfp1="" pfp2=""  userName1="progamer_"  userName2="noob_game" id1="" id2="" />
        <Res pfp1="" pfp2=""  userName1="progamer_"  userName2="noob_game" id1="" id2="" />
        <Res pfp1="" pfp2=""  userName1="progamer_"  userName2="noob_game" id1="" id2="" />
      </div>
    </div>
  );
}

export default Avg;

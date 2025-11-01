"use client";
import Image from "next/image";
import React from "react";
import Header from "../components/Home.tsx/Header";
import GamePlay from "../components/Home.tsx/GamePlay";
import Select from "../components/Home.tsx/Select";
import Avg from "../components/Home.tsx/Avg";
import Footer from "../components/Home.tsx/Footer";

function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden w-[100vw] ">
      <Header pfp="" userName="pro-gamer" userId="jshjh" />

      <div className=" h-[1px] w-[70%] mb-2 top-0 left-0 bg-opacity-40 bg-lime-600 opacity-50 z-10" />
      <Select/>
      <Avg/>
      <Footer/>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import "../../styles/animations.css";

export default function ResPopOffline({ winner }: { winner: string }) {
  return (
    <div
      className={` ${
        winner ? "appear" : ""
      }  overflow-hidden border-l-[2px] appear border-lime-600 py-3 fontBIT text-[45px]  flex flex-col  text-center items-center justify-center bg-black h-fit w-[400px]`}
    >
      {winner}
    </div>
  );
}

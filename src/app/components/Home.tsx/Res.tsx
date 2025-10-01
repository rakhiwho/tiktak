import { User } from "@/app/reactIcons";
import Image from "next/image";
import React from "react";

function Res({
  pfp1,
  pfp2,
  userName1,
  userName2,
  id1,
  id2,
}: {
  pfp1: string;
  pfp2: string;
  userName1: string;
  userName2: string;
  id1: string;
  id2: string;
}) {
  return (
    <div className="flex justify-between items-center flex-row w-[68vw]">
      <div className="flex flex-row w-fit items-center justify-center">
        <div className=" h-[50px]  w-[50px]  mt-2 rounded-full flex flex-row items-center overflow-hidden ">
          {pfp1 ? (
            <Image
              height={100}
              width={100}
              className="  h-[190px]  bg-cover "
              alt="logo.jpg"
              src="/media/logo.jpg"
            />
          ) : (
            <User className="text-[30px] text-lime-900 " />
          )}
        </div>
        <div>
          <p className="michroma-4 tracking-[2px]">{userName1}</p>
        </div>
      </div>
      <div className="text-[30px] text-lime-900 ">
        6|3
      </div>
      <div className="flex flex-row w-fit items-center justify-center">
        <div>
          <p className="michroma-4 tracking-[2px]">{userName2}</p>
        </div>
        <div className=" h-[50px]  w-[50px]  mt-2 rounded-full flex items-center overflow-hidden ">
          {pfp2 ? (
            <Image
              height={100}
              width={100}
              className="  h-[190px]  bg-cover "
              alt="logo.jpg"
              src="/media/logo.jpg"
            />
          ) : (
            <User className="text-[30px] text-lime-900 " />
          )}
        </div>
      </div>
    </div>
  );
}

export default Res;

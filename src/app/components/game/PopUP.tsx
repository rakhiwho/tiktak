
import { UserContextProvider } from "@/app/context/UseContext";
import { SocketContextProvider } from "@/app/socketContext/socketContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function PopUP({
  message,
  userID,
  userName,
}: {
  message: string;
  userID: string | null;
  userName: string | null;
}) {
  const { SOCKET, game  , start} = SocketContextProvider();
  const { selectedUser, player, op, setPlayer, setOp, setDis } =
    UserContextProvider();
  const user = localStorage.getItem("user");

  const router = useRouter();
  const acceptInvite = async () => {
    let p = "";

    const num = Math.random();
    if (num < 0.5) {
      p = "O";
    } else {
      p = "X";
    }

    SOCKET?.emit("acceptInvite", { p, userid: userID, user1: user });
    setPlayer(p);
    localStorage.setItem("player" , p);
    setOp(userID || "");
    localStorage.setItem("op", `${op}`);
    localStorage.setItem("you", `${p}`);
    setDis(false);
    start();

    router.push(`/${userID}`)
  };

  return (
    <div className="  h-fit w-fit px-[10vw] py-[10vh] flex flex-col bg-lime-500 bg-opacity-65 ">
      <p className=" michroma-3 text-lime-950 ">{message}   {userName} </p>
      <div className=" w-[300px] flex justify-around  ">
        <button className=" michroma-3 text-lime-950  border-lime-950 px-2 capitalize border-[1px] rounded-md hover:bg-lime-600 " onClick={() => setDis(false)}>no </button>
        <button className=" michroma-3 text-lime-950 bg-lime-950 green-txt-3 px-2 capitalize rounded-md  hover:bg-lime-900  " onClick={acceptInvite}>yes</button>
      </div>
    </div>
  );
}

export default PopUP;

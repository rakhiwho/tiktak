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
    setOp(userID || "");
    localStorage.setItem("op", `${op}`);
    localStorage.setItem("you", `${p}`);
    setDis(false);
    start();

    router.push(`/${userID}`)
  };

  return (
    <div>
      <p>{message}? from </p>
      <div>
        <button onClick={() => setDis(false)}>no </button>
        <button onClick={acceptInvite}>yes</button>
      </div>
    </div>
  );
}

export default PopUP;

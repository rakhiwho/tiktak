import React, { useEffect, useState } from "react";
import "../../styles/animations.css";
import { SocketContextProvider } from "@/app/socketContext/socketContext";
import { UserContextProvider } from "@/app/context/UseContext";
import { useRouter } from "next/navigation";
export default function ResPop({
  winner,
  score,
}: {
  winner: string;
  score: number[];
}) {
  const { SOCKET } = SocketContextProvider();
  const op = localStorage.getItem("op") || null;
  const gameId = localStorage.getItem("gameId");

  const {} = UserContextProvider();
  const router = useRouter();
  const you = localStorage.getItem("you");
  const hanleLeave = () => {
    if (op != null) {
      SOCKET?.emit("leave", { id : op, gameId });
    }
   
  };
  const hanleRestart = () => {
    if (op != null) {
      SOCKET?.emit("restart", { userId: op, gameId });
    }
  };

 
  useEffect(() => {
    const leave = ({ id, score }: { id: string; score: [number] }) => {
      localStorage.removeItem("gameId");
      localStorage.removeItem("op");
      localStorage.removeItem("you");
      localStorage.removeItem("player");
      router.push("/play");
    };
    SOCKET?.on("updateGameIn", leave);

    return () => {
      SOCKET?.off("updateGameIn", leave);
    };
  });
  const [res, setRes] = useState({ you: 0, op: 0 });
  useEffect(() => {
    if (you == "O") {
      setRes({ ...res, you: score[0], op: score[1] });
    } else {
      setRes({ ...res, you: score[1], op: score[0] });
    }
  }, [score]);
  return (
    <div
      className={` ${
        winner ? "appear" : ""
      }  overflow-hidden border-l-[2px] appear border-lime-600 py-3 fontBIT text-[45px]  flex flex-col  text-center items-center justify-center bg-black h-fit w-[400px]`}
    >
      {winner}
      <div className="flex ">
        <p className="fontBIT  w-[100px]  national-bg "> {score && res.op}</p>
        <p className="fontBIT w-[100px]  bg-lime-800 "> {score && res.you}</p>
      </div>
      <div className="flex flex-row justify-around">
        <button
          onClick={hanleRestart}
          className="btn bgAni michroma-5 uppercase text-xl rounded-lg bg-black "
        >
          restart
        </button>
        <button
          onClick={hanleLeave}
          className="btn bgAni michroma-5 uppercase text-xl rounded-lg bg-black "
        >
          leave
        </button>
      </div>
    </div>
  );
}

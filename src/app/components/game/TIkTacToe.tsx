"use client";

import { SocketContextProvider } from "@/app/socketContext/socketContext";
import React, { useState, useEffect } from "react";
import { UserContextProvider } from "@/app/context/UseContext";
import ResPop from "./ResPop";
import Turn from "./Turn";
import { useRouter } from "next/navigation";

function TicTacToe() {
  const user = localStorage.getItem("user");
  const gameId = localStorage.getItem("gameId");
  const you = localStorage.getItem("you");

  const { setGame, game, SOCKET } = SocketContextProvider();
  const { player, op, setPlayer } = UserContextProvider();
  const [loading, setLoading] = useState(true);
  const [winner, setWinner] = useState("");
  const [draw, setDraw] = useState("");
  const [SCORE, setSCORE] = useState<number[]>();
  const route = useRouter();
  setInterval(() => {
    setLoading(true);
  }, 3000);
  const update = async (row: number, col: number) => {
    if (game[row][col] != "" || !game) return;
    game[row][col] = player;
    setGame([...game]);
    let p = player;
    if (p == "O") {
      p = "X";
      setPlayer("X");
    } else {
      p = "O";
      setPlayer("O");
    }
    localStorage.setItem("player", p);
    console.log(game);
    SOCKET?.emit("updateGame", {
      id: gameId,
      newBoard: game,
      userid: op,
      row,
      col,
      p: p,
      quite: "",
    });
  };
  useEffect(() => {
    const gameBoard = ({
      p,
      newBoard,
      winner: win,
      draw: d,
      score,
    }: {
      newBoard: [[string]];
      p: string;
      winner: string;
      draw: string;
      score: number[];
    }) => {
      setPlayer(p);
      localStorage.setItem("player", p);
      setGame([...newBoard]); 
      setWinner(win);
      console.log(score);
      setSCORE({...score});
      setDraw(d);
    };
    SOCKET?.on("updateGameIn", gameBoard);

    return () => {
      SOCKET?.off("updateGameIn", gameBoard);
    };
  });
  useEffect(() => {
    const gameBoard = ({
      p,
      newBoard,
      winner: win,
      draw: d,
      score,
    }: {
      newBoard: [[string]];
      p: string;
      winner: string;
      draw: string;
      score: number[];
    }) => {
      setPlayer(p);
      localStorage.setItem("player", p);
      setGame([...newBoard]);
      setWinner(win);
      setDraw(d);
      setSCORE(score);
    };
    SOCKET?.on("res", gameBoard);

    return () => {
      SOCKET?.off("res", gameBoard);
    };
  });
  const HandleClick = (row: number, col: number) => {
    if (player != you) return;
    if (row < 0 || col < 0) return;
    update(row, col);
  };
  useEffect(() => {
    const leave = ({ id }: { id: string }) => {
      setWinner("");
      setDraw("");
      setGame([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
    };
    SOCKET?.on("restartGame", leave);

    return () => {
      SOCKET?.off("restartGame", leave);
    };
  });
  useEffect(() => {
    const leave = ({ id }: { id: string }) => {
      console.log("heloow from leave result")
      setWinner("");
      setDraw("");
      setGame([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
      localStorage.removeItem("gameId");
      localStorage.removeItem("op");
      localStorage.removeItem("you");
      localStorage.removeItem("player");
      route.push("/play");
    };
    SOCKET?.on("leaveRes", leave);

    return () => {
      SOCKET?.off("leaveRes", leave);
    };
  });
  return (
    <div className=" flex flex-col ">
      <div className="flex flex-row justify-between w-[250px] items-center">
        <span className="michroma-6 text-2xl  green-txt-3">TO PLAY __ </span>{" "}
        <p className="fontBIT text-5xl">{player}</p>
      </div>
      {(winner || draw != "") && (
        <div className="absolute top-0  left-0 flex  h-[100vh] w-[100vw]  bg-lime-900 bg-opacity-50 flex-col justify-center  items-center ">
          <ResPop
            score={SCORE || []}
            winner={winner != "" ? `the winner is ${winner}` : "Draw"}
          />
        </div>
      )}
      {!loading && <div className="">loading...</div>}
      {/* ..............first.............. */}
      {loading && (
        <>
          {" "}
          <div className="h-fit  flex w-fit  ">
            <div
              onClick={() => HandleClick(0, 0)}
              className="w-[200px] hover:bg-opacity-75 border-r-[1px] green-txt-1 border-lime-600 border-b-[1px]  bg-lime-950 bg-opacity-50  h-[200px] flex items-center justify-center text-2xl text-black text-center "
            >
              <Turn turn={game[0][0]} />
            </div>
            <div
              onClick={() => HandleClick(0, 1)}
              className="w-[200px] hover:bg-opacity-75 bg-lime-950 green-txt-1 bg-opacity-50 border-r-[1px] border-lime-600 h-[200px] flex items-center justify-center text-2xl text-black text-center "
            >
              <Turn turn={game[0][1]} />
            </div>
            <div
              onClick={() => HandleClick(0, 2)}
              className="w-[200px] hover:bg-opacity-75 bg-lime-950 green-txt-1 bg-opacity-50 border-b-[1px] border-lime-600 h-[200px] flex items-center justify-center text-2xl text-black text-center "
            >
              <Turn turn={game[0][2]} />
            </div>
          </div>
          {/* .............second................. */}
          <div className="h-fit flex w-fit">
            <div
              onClick={() => HandleClick(1, 0)}
              className="w-[200px] hover:bg-opacity-75 bg-lime-950 green-txt-1 bg-opacity-50 border-b-[1px] border-lime-600  h-[200px] flex items-center justify-center text-2xl text-black text-center "
            >
              <Turn turn={game[1][0]} />
            </div>
            <div
              onClick={() => HandleClick(1, 1)}
              className="w-[200px] hover:bg-opacity-75 bg-lime-950 green-txt-1 bg-opacity-50 border-[1px] border-lime-600  h-[200px] flex items-center justify-center text-2xl text-black text-center "
            >
              <Turn turn={game[1][1]} />
            </div>
            <div
              onClick={() => HandleClick(1, 2)}
              className="w-[200px] hover:bg-opacity-75 bg-lime-950  green-txt-1 bg-opacity-50 border-b-[1px] border-lime-600 h-[200px] flex items-center justify-center text-2xl text-black text-center "
            >
              <Turn turn={game[1][2]} />
            </div>
          </div>
          {/* ...............third............... */}
          <div className="h-fit flex w-fit border-b-[1px] border-lime-600">
            <div
              onClick={() => HandleClick(2, 0)}
              className="w-[200px] hover:bg-opacity-75  bg-lime-950 green-txt-1 bg-opacity-50 border-r-[1px] border-lime-600 h-[200px] flex items-center justify-center text-2xl text-black text-center "
            >
              <Turn turn={game[2][0]} />
            </div>
            <div
              onClick={() => HandleClick(2, 1)}
              className="w-[200px] hover:bg-opacity-75 bg-lime-950 green-txt-1 bg-opacity-50 border-r-[1px] border-lime-600  h-[200px] flex items-center justify-center text-2xl text-black text-center "
            >
              <Turn turn={game[2][1]} />
            </div>
            <div
              onClick={() => HandleClick(2, 2)}
              className="w-[200px] hover:bg-opacity-75 green-txt-1  bg-lime-950 bg-opacity-50  h-[200px] flex items-center justify-center text-2xl text-black text-center "
            >
              <Turn turn={game[2][2]} />
            </div>
          </div>{" "}
        </>
      )}
      <h1 className="mb-5 text-5xl w-fit font-bold fontBIT text-[40px] ">
        SCORES
      </h1>

      <div className="flex flex-row justify-between w-[100%] items-center">
        <div className="flex flex-row justify-between w-[250px] items-center">
          <span className="michroma-6 text-2xl  green-txt-3">O __ </span>{" "}
          <p className="fontBIT text-5xl">{SCORE && SCORE[0]}</p>
        </div>
        <div className="flex flex-row justify-between w-[250px] items-center">
          <span className="michroma-6 text-2xl  green-txt-3">X__ </span>{" "}
          <p className="fontBIT text-5xl">{SCORE && SCORE[1]}</p>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;

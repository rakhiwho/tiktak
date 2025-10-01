"use client";

import { SocketContextProvider } from "@/app/socketContext/socketContext";
import React, { useState, useEffect } from "react";
import { UserContextProvider } from "@/app/context/UseContext";

function TicTacToe() {
  const user = localStorage.getItem("user");
  const gameId = localStorage.getItem("gameId");
  const { setGame, game, SOCKET } = SocketContextProvider();
  const { player, op, setPlayer } = UserContextProvider();
  const [loading, setLoading] = useState(true);

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
    console.log(game);
    SOCKET?.emit("updateGame", {
      id: gameId,
      newBoard: game,
      userid: op,
      row,
      col,
      p: player,
      quite: "",
    });
  };
  useEffect(() => {
    const gameBoard = ({
      p,
      newBoard,
      winner,
      draw,
    }: {
      p: string;
      winner: string;
      draw: string;
    }) => {
      setGame([...newBoard]);
    };
    SOCKET?.on("updateGameIn", gameBoard);

    return () => {
      SOCKET?.off("updateGameIn", gameBoard);
    };
  });

  const HandleClick = (row: number, col: number) => {
    update(row, col);
  };

  return (
    <div className="bg-black flex flex-col ">
      {!loading && <div className="">loading...</div>}
      {/* ..............first.............. */}
      {loading && (
        <>
          {" "}
          <div className="h-fit  flex w-fit">
            <div
              onClick={() => HandleClick(0, 0)}
              className="w-[100px] hover:bg-slate-300 bg-slate-500 h-[100px] flex items-center justify-center text-2xl text-black text-center "
            >
              {game[0][0]}
            </div>
            <div
              onClick={() => HandleClick(0, 1)}
              className="w-[100px] hover:bg-slate-300 bg-slate-500 h-[100px] flex items-center justify-center text-2xl text-black text-center "
            >
              {game[0][1]}
            </div>
            <div
              onClick={() => HandleClick(0, 2)}
              className="w-[100px] hover:bg-slate-300 bg-slate-500 h-[100px] flex items-center justify-center text-2xl text-black text-center "
            >
              {game[0][2]}
            </div>
          </div>
          {/* .............second................. */}
          <div className="h-fit flex w-fit">
            <div
              onClick={() => HandleClick(1, 0)}
              className="w-[100px] hover:bg-slate-400  bg-slate-500 h-[100px] flex items-center justify-center text-2xl text-black text-center "
            >
              {game[1][0]}
            </div>
            <div
              onClick={() => HandleClick(1, 1)}
              className="w-[100px] hover:bg-slate-400 bg-slate-500 h-[100px] flex items-center justify-center text-2xl text-black text-center "
            >
              {game[1][1]}
            </div>
            <div
              onClick={() => HandleClick(1, 2)}
              className="w-[100px] hover:bg-slate-400 bg-slate-500 h-[100px] flex items-center justify-center text-2xl text-black text-center "
            >
              {game[1][2]}
            </div>
          </div>
          {/* ...............third............... */}
          <div className="h-fit flex w-fit">
            <div
              onClick={() => HandleClick(2, 0)}
              className="w-[100px] hover:bg-slate-400  bg-slate-500 h-[100px] flex items-center justify-center text-2xl text-black text-center "
            >
              {game[2][0]}
            </div>
            <div
              onClick={() => HandleClick(2, 1)}
              className="w-[100px] hover:bg-slate-400 bg-slate-500 h-[100px] flex items-center justify-center text-2xl text-black text-center "
            >
              {game[2][1]}
            </div>
            <div
              onClick={() => HandleClick(2, 2)}
              className="w-[100px] hover:bg-slate-400 bg-slate-500 h-[100px] flex items-center justify-center text-2xl text-black text-center "
            >
              {game[2][2]}
            </div>
          </div>{" "}
        </>
      )}
      <p className="text-white">
        {op}
      </p>
    </div>
  );
}

export default TicTacToe;

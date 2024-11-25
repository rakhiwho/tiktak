"use client";
import React, { useState } from "react";
import IconsJSX from "../icons";
import "../style.css";
import {  TIKTAKTOE } from "../../hooks/easy-comp";
 import '../../components/style.css'
 import "./style.css"
interface Game1Props {
  game: TIKTAKTOE;
}
 
const Game1: React.FC<Game1Props> = ({ game }) => {
  const [board, setBoard] = useState(game.board);
  const [player, setPlayer] = useState(game.PLAYER);
  const [winner, setWinner] = useState(game.WINNER);
 

  const handleMove = (row: number, col: number): void => {
    game.move(row, col);

    setPlayer(game.PLAYER);
    setWinner(game.WINNER);
    setBoard([...game.board]);
  };

  return (
    <>
      <div className=" bg_photo flex flex-col items-center justify-center     my-3">
        <div className="flex flex-row">
          <div
            onClick={() => handleMove(0, 0)}
            className=" height_p text-center content-center hover-bg"
          >
            {board[0][0] != "" && <IconsJSX move={board[0][0]} />}
          </div>
          <div
            onClick={() => handleMove(0, 1)}
            className=" border-x-2 border-white  height_p text-center content-center hover-bg"
          >
            {board[0][1] != "" && <IconsJSX move={board[0][1]} />}
          </div>
          <div
            onClick={() => handleMove(0, 2)}
            className=" height_p text-center content-center hover-bg"
          >
            {board[0][2] != "" && <IconsJSX move={board[0][2]} />}
          </div>
        </div>
        <div className="flex flex-row">
          <div
            onClick={() => handleMove(1, 0)}
            className=" border-y-2  border-white  height_p text-center content-center hover-bg"
          >
            {board[1][0] != "" && <IconsJSX move={board[1][0]} />}
          </div>
          <div
            onClick={() => handleMove(1, 1)}
            className=" border-y-2 border-x-2 border-white  height_p text-center content-center hover-bg"
          >
            {board[1][1] != "" && <IconsJSX move={board[1][1]} />}
          </div>
          <div
            onClick={() => handleMove(1, 2)}
            className=" border-y-2  border-white  height_p text-center content-center hover-bg"
          >
            {board[1][2] != "" && <IconsJSX move={board[1][2]} />}
          </div>
        </div>
        <div className="flex ">
          <div
            onClick={() => handleMove(2, 0)}
            className=" height_p text-center content-center hover-bg"
          >
            {board[2][0] != "" && <IconsJSX move={board[2][0]} />}
          </div>
          <div
            onClick={() => handleMove(2, 1)}
            className="border-x-2 border-white  height_p text-center content-center hover-bg"
          >
            {board[2][1] != "" && <IconsJSX move={board[2][1]} />}
          </div>
          <div
            onClick={() => handleMove(2, 2)}
            className=" height_p text-center content-center hover-bg"
          >
            {board[2][2] != "" && <IconsJSX move={board[2][2]} />}
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <p className="ml-0" > current player : {player}</p>
      <br></br>
      {winner != "" && <>winner is :{winner}</>}
    </>
  );
};

export default Game1;

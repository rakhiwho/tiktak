import { SocketContextProvider } from "@/app/socketContext/socketContext";
import React, { useState, useEffect } from "react";
import { UserContextProvider } from "@/app/context/UseContext";
import Turn from "./Turn";
import { TIKTAKTOE } from "@/app/hooks/easy-comp";
import ResPop from "./ResPop";
import { handleClick } from "@/app/hooks/css";
import ResPopOffline from "./ResPopOffline";

function OfflineGame() {
  const [newGame, setNewGame] = useState(new TIKTAKTOE());
  const [loading, setLoading] = useState(true);
  const [winner, setWinner] = useState(newGame.WINNER);
  const [draw, setDraw] = useState(newGame.DRAW);

  let x =  typeof window !== "undefined"  && parseInt(localStorage.getItem("x") || "0", 10);
  let o =   typeof window !== "undefined" && parseInt(localStorage.getItem("o") || "0", 10);
  const [game, setGame] = useState(newGame.board.map((row) => [...row]));
  useEffect(() => {
    if (winner == "") return;
    if (winner == "O") {
      let count =  parseInt(localStorage.getItem("o") || "0", 10);

      count += 1;
      o = count;
      localStorage.setItem("o", count.toString());
    } else {
      let count = parseInt(localStorage.getItem("x") || `${x}`, 10);
      count += 1;
      x = count;
      localStorage.setItem("x", count.toString());
    }
  }, [winner]);
  const HandleClick = (row: number, col: number) => {
    newGame.move(row, col);
    setNewGame(newGame);
    setGame(newGame.board.map((row) => [...row]));
    setWinner(newGame.WINNER);
    setDraw(newGame.DRAW)
    console.log(draw)
  };
  const handleClick = () => {
    newGame.reset();
    setNewGame(newGame);
    setGame(newGame.board.map((row) => [...row]));
    setWinner("");
    newGame.DRAW = false;
    setDraw(false)
  };
  const handleClickRes = () => {
    handleClick();
    localStorage.removeItem("o");
    localStorage.removeItem("x");
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between w-[250px] items-center">
        <span className="michroma-6 text-2xl  green-txt-3">TO PLAY __ </span>{" "}
        <p className="fontBIT text-5xl">{newGame.PLAYER}</p>
      </div>
      <div className="bg-black flex flex-col self-center border-[1px]  border-lime-600 rounded-lg  ">
        {(draw || winner != "") && (
            <div className="absolute top-0  left-0 flex  h-[100vh] w-[100vw]  bg-lime-900 bg-opacity-50 flex-col justify-center  items-center ">
              <ResPopOffline
                winner={
                  !draw ? `the winner is ${newGame.WINNER}` : "Draw"
                }
              />
              <div className="flex flex-row justify-around">
                <button
                  onClick={handleClick}
                  className="btn bgAni michroma-5 uppercase text-xl rounded-lg bg-black "
                >
                  restart
                </button>
                <button
                  onClick={handleClickRes}
                  className="btn bgAni michroma-5 uppercase text-xl rounded-lg bg-black "
                >
                  reset
                </button>
              </div>
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
      </div>
      <h1 className="mb-5 text-5xl w-fit font-bold fontBIT text-[40px] ">
        SCORES
      </h1>

      <div className="flex flex-row justify-between w-[100%] items-center">
        <div className="flex flex-row justify-between w-[250px] items-center">
          <span className="michroma-6 text-2xl  green-txt-3">O __ </span>{" "}
          <p className="fontBIT text-5xl">{o || 0}</p>
        </div>
        <div className="flex flex-row justify-between w-[250px] items-center">
          <span className="michroma-6 text-2xl  green-txt-3">X__ </span>{" "}
          <p className="fontBIT text-5xl">{x || 0}</p>
        </div>
      </div>
    </div>
  );
}

export default OfflineGame;

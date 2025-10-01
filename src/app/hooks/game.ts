import axios from "axios";
import React, { useState } from "react";

interface IStartGameParams {
  p: string | null;
  player2: string | null;
  game: string[];
  currentPlayer: string | null;
  gameId: string | null;
  winner?: string | null;
  result?: string | null;
}
function GameCrud() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const startGame = async ({
    p,
    player2,
    game,
    currentPlayer,
    winner,
    result,
  }: IStartGameParams) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/game/join`,
        { p, player2, game, currentPlayer, winner, result },
        { withCredentials: true }
      );

      if (!res) {
        console.log("something went wrong ");
        setLoading(false);
        return ;
      }
      setData(res.data);
      setLoading(false);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const updateGame = async ({
    p,
    player2,
    game,
    currentPlayer,
    winner,
    result,
    gameId,
  }: IStartGameParams) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/game/update`,
        {
          player1: p,
          player2,
          gameId,
          board: [...game],
          currentPlayer,
          winner,
          result,
        },
        { withCredentials: true }
      );

      if (!res) {
        console.log("something went wrong ");
        setLoading(false);
        return;
      }
      setData(res.data);
      setLoading(false);
      return  data;
    } catch (error) {
      console.log(error);
    }
  };
  const getGame = async ({ gameId }: IStartGameParams) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/game/?gameId=${gameId}`,
        { withCredentials: true }
      );

      if (!res) {
        console.log("something went wrong ");
        setLoading(false);
        return;
      }
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return { data, startGame, updateGame, getGame, loading };
}

export default GameCrud;

"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useCookies } from "react-cookie";
import GameCrud from "../hooks/game";

export function UserContextProvider() {
  return useContext<IContext>(context);
}
export interface IContext {
  dis: boolean;
  setDis(dis: boolean): void;
  user: string | null;
  setUser(user: string): void;
  selectedUser: string | null;
  setSelectedUser(selectedUser: string): void;
  player: string;
  op: string;
  setPlayer: (player: string) => null;
  setOp: (op: string) => null;
  currentPlayer: string | null;
  setCurrentPlayer: (currentPlayer: string) => null;
}

const defaultval: IContext = {
  dis: false,
  setDis: (dis) => null,
  user: "",
  setUser: (user) => null,
  selectedUser: localStorage.getItem("selectedUser"),
  setSelectedUser: (selectedUser) => null,
  player: localStorage.getItem("player") || "" ,
  op: localStorage.getItem("op")||"",
  setOp: (op) => null,
  setPlayer: (player) => null,
  currentPlayer: localStorage.getItem("currentPlayer") || "",
  setCurrentPlayer: (currentPlayer) => null,
};

export const context = createContext<IContext>(defaultval);

function UseContext({ children }) {
  const [dis, setDis] = useState(false);
  const [user, setUser] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<string | null>(
    localStorage.getItem("selectedUser")
  );
  const [player, setPlayer] = useState(localStorage.getItem("player"));
  const [op, setOp] = useState(localStorage.getItem("op") ||  "");
  const [currentPlayer, setCurrentPlayer] = useState(
    localStorage.getItem("player") || ""
  );
  
  const valContext: IContext = {
    dis,
    setDis,
    user,
    setUser,
    selectedUser,
    setSelectedUser,
    player,
    setPlayer,
    op,
    setOp,
    currentPlayer,
    setCurrentPlayer,
  };

  return <context.Provider value={valContext}>{children}</context.Provider>;
}

export default UseContext;

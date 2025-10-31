"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

/* -------------------- Context Interface -------------------- */
export interface IContext {
  dis: boolean;
  setDis: Dispatch<SetStateAction<boolean>>;
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
  selectedUser: string | null;
  setSelectedUser: Dispatch<SetStateAction<string | null>>;
  player: string | null;
  setPlayer: Dispatch<SetStateAction<string | null>>;
  op: string;
  setOp: Dispatch<SetStateAction<string>>;
  currentPlayer: string;
  setCurrentPlayer: Dispatch<SetStateAction<string>>;
}

/* -------------------- Default Context Value -------------------- */
// Use no-op functions for default setters (avoids returning null)
const defaultVal: IContext = {
  dis: false,
  setDis: () => {},
  user: "",
  setUser: () => {},
  selectedUser: null,
  setSelectedUser: () => {},
  player: null,
  setPlayer: () => {},
  op: "",
  setOp: () => {},
  currentPlayer: "",
  setCurrentPlayer: () => {},
};

/* -------------------- Create Context -------------------- */
export const context = createContext<IContext>(defaultVal);

/* -------------------- Hook to Access Context -------------------- */
export function useUserContext(): IContext {
  const ctx = useContext(context);
  if (!ctx) {
    throw new Error("useUserContext must be used within <UseContext>");
  }
  return ctx;
}

/* -------------------- Provider Component -------------------- */
interface UseContextProps {
  children: ReactNode;
}

function UseContext({ children }: UseContextProps) {
  const [dis, setDis] = useState(false);
  const [user, setUser] = useState("");
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [player, setPlayer] = useState<string | null>(null);
  const [op, setOp] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState("");

  // Load values from localStorage only on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      setSelectedUser(localStorage.getItem("selectedUser"));
      setPlayer(localStorage.getItem("player"));
      setOp(localStorage.getItem("op") || "");
      setCurrentPlayer(localStorage.getItem("currentPlayer") || "");
    }
  }, []);

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
export function UserContextProvider() { return useContext<IContext>(context); }
export default UseContext;

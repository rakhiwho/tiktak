"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const Socketio = ({ children }) => {
  const [cookies] = useCookies(["accessToken"]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [inGame, setInGame] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [SOCKET, setSOCKET] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (cookies.accessToken && user) {
      const SOCKET = io("http://localhost:3001", {
        query: { user },
      });
      setSOCKET(SOCKET);
      setIsConnected(true);
      SOCKET?.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });
      SOCKET?.on("getInGameUsers", (users) => {
        setInGame(users);
        console.log(inGame)
      });
      return () => SOCKET?.close();
    } else {
      if (SOCKET) {
        SOCKET.close();
        setSOCKET(null);
        setIsConnected(false);
      }
    }
  }, [cookies.accessToken ]);

  const value = {
    isConnected,
    SOCKET,
    onlineUsers,
    inGame
  };
  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

export const SocketContextProvider = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default Socketio;

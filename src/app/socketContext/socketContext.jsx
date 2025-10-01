"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { io } from "socket.io-client";
import Cookies from "js-cookie";
import { axiosInstance } from "../hooks/axios";
import GameCrud from "../hooks/game";
import { useRouter } from "next/navigation";
import { UserContextProvider } from "../context/UseContext";

const SocketContext = createContext();
export const Socketio = ({ children }) => {
  const gameId = localStorage.getItem("gameId");
  const router = useRouter();
  const cookie = Cookies.get("accessToken");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [inGame, setInGame] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [SOCKET, setSOCKET] = useState(null);
  const [message, setMessage] = useState([]);
  const [game, setGame] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const user = localStorage.getItem("user");
  const { setPlayer, player, op, setOp } = UserContextProvider();
  useEffect(() => {
    if (cookie && user) {
      const socketInstance = io("http://localhost:3005/", {
        query: { user },
      });
      setSOCKET(socketInstance);
      setIsConnected(true);

      socketInstance.on("get_all_users", (users) => {
        setOnlineUsers(users);
      });

      socketInstance.on("getInGameUsers", (users) => {
        setInGame(users);
      });
      socketInstance.on("connect", () => {
        socketInstance.emit("refreshing", { gameId, user1: user });
      });
      return () => {
        socketInstance.removeAllListeners();
        socketInstance.close();
      };
    } else {
      if (SOCKET) {
        SOCKET.close();
        setSOCKET(null);
        setIsConnected(false);
      }
    }
  }, [cookie]);

  useEffect(() => {
    const handle = ({ gameFromBackend }) => {
      console.log("Received sendGame:", gameFromBackend);

      if (!gameFromBackend) {
        console.warn("Game data is empty/undefined");
        return;
      }
      setGame(gameFromBackend);
    };
    SOCKET?.on("recieveID", handle);
    return () => {
      SOCKET?.off("recieveID", handle);
    };
  }, [SOCKET]);
  useEffect(() => {
    if (!SOCKET) return;

    const handleReceiveMessage = (msg) => {
      setMessage((prevMessages) => [...prevMessages, msg]);
    };

    SOCKET.on("receive", handleReceiveMessage);

    return () => {
      SOCKET.off("receive", handleReceiveMessage);
    };
  }, [SOCKET]);
  useEffect(() => {
    const receive = ({ p, user }) => {
      console.log(p + " " + user);
      if (p == "X") {
        setPlayer("O");
        localStorage.setItem("you", `O`);
      } else {
        setPlayer("X");
        localStorage.setItem("you", `X`);
      }
      setOp(user);
      localStorage.setItem("op", `${user}`);
      router.push(`/${user}`);
    };
    SOCKET?.on("inviteAccepted", receive);
    return () => {
      SOCKET?.off("inviteAccepted", receive);
    };
  });
  async function getUserMe() {
    let data = null;
    if (cookie) {
      data = await axiosInstance.get(`/api/users/me`);
    } else {
      data = null;
    }
  }
  useEffect(() => {
    const gameId = ({ id }) => {
      console.log(id);
      localStorage.setItem("gameId", id);
    };
    SOCKET?.on("gameId", gameId);

    return () => {
      SOCKET?.off("gameId", gameId);
    };
  });

  useEffect(() => {
    getUserMe();
  }, [cookie]);
  const { data, startGame, updateGame, getGame } = GameCrud();

  const start = async () => {
    const res = await startGame({
      currentPlayer: player,
      game: [...game],
      gameId: "",
      player2: op,
      p: user,
      winner: "",
      result: "",
    });
    console.log(res);
    setTimeout(() => {
      if (res?._id) {
        console.log(res._id);
        localStorage.setItem("gameId", `${res._id}`);
        SOCKET?.emit("sendGameID", { id: res._id, user: op });
      } else {
        console.log("couldnt")
        // alert(" game failed send another invite ");
      }
    }, 3000);
  };
  const value = {
    isConnected,
    SOCKET,
    onlineUsers,
    inGame,
    message,
    setMessage,
    game,
    setGame,
    start,
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

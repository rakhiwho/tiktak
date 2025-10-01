import { UserContextProvider } from "@/app/context/UseContext";
import { Fetchdata } from "@/app/hooks/AllUser";
import { SocketContextProvider } from "@/app/socketContext/socketContext";
import React, { useEffect, useState } from "react";
import PopUP from "../game/PopUP";
import { useRouter } from "next/navigation";

function SideBar() {
  const { onlineUsers, SOCKET, start } = SocketContextProvider();

  const {
    selectedUser,
    setPlayer,
    player,
    setOp,
    dis,
    setDis,
    setSelectedUser,
  } = UserContextProvider();

  const { data, loading } = Fetchdata();
  const [onliners, setOnliners] = useState([]);

  const getOnline = () => {
    return data?.filter(
      (user) => onlineUsers && user?._id && onlineUsers[user._id]
    );
  };
  const router = useRouter();
  const sendInvite = (id: string, userName: string) => {
    SOCKET.emit("sendInvite", {
      id,
      userName,
    });
    localStorage.setItem("selectedUser", `${id}`);
    setSelectedUser(id);
  };
  const [user, setUser] = useState({ userID: "", userName: "" });
 useEffect(() => {
  if (!SOCKET) return;

  const handleInvite = ({
    user,
    userName,
  }: {
    user: string;
    userName: string;
  }) => {
    setUser({ userName, userID: user });
    setDis(true);
  };
  
  SOCKET.on("inviteSent", handleInvite);
  start();

  // Cleanup function to avoid duplicate listeners
  return () => {
    SOCKET.off("inviteSent", handleInvite);
  };
}, [SOCKET]);

  useEffect(() => {
    if (!loading) {
      const onlineUsersList = getOnline();
      setOnliners([...onlineUsersList]);
    }
  }, [loading, data, onlineUsers]);

  return (
<div
  className="hero min-h-screen w-[30vw]"
  style={{
    backgroundImage:
      "url(/media/bgSide.gif)",
  }}
>
  <div className="hero-overlay bg-black bg-opacity-60"></div>
      {dis && (
        <div className="h-[100vh] relative z-20    bg-slate-500 w-[100vw] flex flex-col items-center">
          {" "}
          <PopUP
            userName={user.userName}
            userID={user.userID}
            message="accept invite?"
          />{" "}
        </div>
      )}
      {onliners.length != 0 &&
        onliners.map((e) => (
          <button onClick={() => sendInvite(e._id, e.userName)} key={e._id}>
            {e.userName}
          </button>
        ))}
    </div>
  );
}

export default SideBar;

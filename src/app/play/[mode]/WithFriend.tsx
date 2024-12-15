"use client";
import React, { useState, useEffect } from "react";
import { fetchdata } from "../../hooks/joiningRoom";
import { IUser } from "@/interface/IUser";
import { SocketContextProvider } from "@/app/socketContext/socketContext";
function WithFriend() {
  const { SOCKET, onlineUsers, inGame } = SocketContextProvider();
  const [data, setData] = useState<[IUser]>();
  console.log(onlineUsers);
  useEffect(() => {
    const fetchData = async () => {
      const data1: [IUser] = await fetchdata();

      setData(data1);
    };

    fetchData();
  }, []); // Emp

  const user = localStorage.getItem("user");
  const playOnline = (friendId: string) => {
    SOCKET?.emit("join", user, friendId);
  };
  return (
    <div>
      {Array.isArray(data) &&
        data?.map((s) => (
          <div
            className="m-2 border-b-[1px] pb-3 w-[50vw] "
            key={s._id}
           
          >
            <li
              className={`${
                onlineUsers.indexOf(s._id) != -1 && " text-green-600  "
              }font-mono text-xl flex  `}
              onDoubleClick={()=>playOnline(s._id)}
            >
              {s.userName}
            </li>{" "}
            {inGame.indexOf(s._id) != -1 && "playing..."}
          </div>
        ))}
    </div>
  );
}

export default WithFriend;

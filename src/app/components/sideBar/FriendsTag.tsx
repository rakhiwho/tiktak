import React from "react";
import { User } from "@/app/reactIcons";
import Image from "next/image";
import { SocketContextProvider } from "@/app/socketContext/socketContext";
import { UserContextProvider } from "@/app/context/UseContext";

function FriendsTag({
  pfp,
  userName,
  userId,
}: {
  pfp: string;
  userName: string;
  userId: string;
}) {
  const { SOCKET } = SocketContextProvider();

  const { setSelectedUser } = UserContextProvider();
  const sendInvite = (id: string, userName: string) => {
    SOCKET.emit("sendInvite", {
      id,
      userName,
    });
    localStorage.setItem("selectedUser", `${id}`);
    setSelectedUser(id);
  };
  return (
    <div className="flex flex-row justify-between  w-[100%] items-center pr-3">
      <div className="flex flex-row items-center justify-center">
        <div className=" h-[50px]  w-[50px]  mt-1 rounded-full flex items-center overflow-hidden ">
          {pfp ? (
            <Image
              height={100}
              width={100}
              className="  h-[190px]  bg-cover "
              alt="logo.jpg"
              src="/media/logo.jpg"
            />
          ) : (
            <User className="text-[30px] text-lime-900 " />
          )}
        </div>
        <div>
          <p className="michroma-3 tracking-[2px]">{userName}</p>
        </div>
      </div>
      <button
        onClick={() => sendInvite(userId, userName)}
        className="   michroma-2  bg-lime-800  bg-opacity-65 px-3 rounded-md  green-txt-3 "
      >
        invite
      </button>
    </div>
  );
}

export default FriendsTag;

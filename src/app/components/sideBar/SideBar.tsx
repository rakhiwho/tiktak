import { UserContextProvider } from "@/app/context/UseContext";
import { Fetchdata } from "@/app/hooks/AllUser";
import { SocketContextProvider } from "@/app/socketContext/socketContext";
import React, { useEffect, useState } from "react";
import PopUP from "../game/PopUP";
import { useRouter } from "next/navigation";
import FriendsTag from "./FriendsTag";  
import { FaSearch } from "react-icons/fa";
import { LuMailSearch } from "react-icons/lu";
import { Search } from "@/app/reactIcons";

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
      className={`  w-full  lg:w-[380px]  lg:min-w-[350px]  h-[50vh] lg:h-[100vh]  overflow-h-scroll bg-black`}
    >
      {" "}
      <div className="flex flex-row pt-2 items-center justify-start pl-2">
        <p className="michroma-4 tracking-[2px] green-txt-1">
          friends{" "}
          <span className="  w-[30px] bg-slate-400 px-2 rounded-md bg-opacity-25 michroma-2 ">
          { data?.length}
          </span>
        </p>
      </div>
      {dis && (
        <div className="h-[100vh] fixed z-20  left-0  bg-lime-950 bg-opacity-25 w-[100vw] pl-[50px] flex flex-col justify-center items-center">
          {" "}
          <PopUP
            userName={user.userName}
            userID={user.userID}
            message={`do you want to accept invite from ${user.userName}?`}
          />{" "}
        </div>
      )}
      <div className=" top-0 left-0 w-full my-0 h-[1px] divider bg-slate-700 opacity-50 z-10" />
      <label className=" national-bg flex  flex-row justify-start rounded-md items-center mx-2 my-1 outline-none  ">
        <Search className=" text-[30px] pl-1 text-lime-600 text-opacity-35 mr-1 " />
        <input
          className="outline-none  michroma-2 text-[12px] py-2 w-full  green-txt-2 national-bg "
          type="search"
          required
          placeholder="Search"
        />
      </label>
      <div className="flex flex-col justify-start pl-3 h-[30vh] lg:h-[90vh]  overflow-scroll ">
        {data?.map((e) => (
          <div key={e._id}>
            <FriendsTag pfp="" userName={e.userName} userId={e._id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;

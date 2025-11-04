import { User } from "@/app/reactIcons";
import { SocketContextProvider } from "@/app/socketContext/socketContext";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Games from "./Games";
import Friends from "./Friends";

function Profile() {
  const router = useRouter();
  const { data } = SocketContextProvider();
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (data?._id) {
      setLoading(false);
    }
  }, [data]);
  const logOut = async () => {
    const res = await axios.get("api/users/logout", { withCredentials: true });
    localStorage.clear();
    console.log(res.data);
    router.push("./login");
  };
  return (
    <div className="   bg-black h-[100vh] w-[100vw] lg:items-center flex flex-col justify-start ">
      <div className="national-bg p-2 h-fit  w-[90vw] flex-row justify-between ml-2 lg:w-[70vw] mt-4 flex ">
        <div className="m-2">
          <div className=" flex justify-center  items-center flex-col ">
            <div className="lg:w-45  w-36 rounded">
              {data?._id ? (
                <Image height={100} width={100} alt="pfp" src="" />
              ) : (
                <User className="text-[30px] lg:w-[25vh] w-[120px] h-[120px] lg:h-[25vh] text-lime-900 " />
              )}
            </div>
          </div>
        </div>
        <div className="flex lg:w-[35vw]  w-full p-0 m-0 flex-col items-end text-right justify-between">
          <div className="flex flex-row  items-end justify-between w-[100%] ">
            {" "}
            <p className="michroma-4 tracking-[2px] green-txt-1">
              Progamer
            </p>{" "}
            <button className="btn  mr-0  btn-neutral hover:bg-lime-800 ">
              edit profile
            </button>{" "}
          </div>
          <div className="flex flex-row  michroma-4 text-sm justify-between w-full">
            <div className="flex flex-col text-lime-600 text-opacity-60 ml--0">
              since{" "}
              <span className=" text-slate-300 text-opacity-45"> 2025-2-2</span>
            </div>
            <div className="flex flex-col text-lime-600 text-opacity-60 ml--0">
              games{" "}
              <span className=" text-slate-300 text-opacity-45"> 2778</span>
            </div>
            <div className="flex flex-col text-lime-600 text-opacity-60 ml--0">
              views <span className=" text-slate-300 text-opacity-45"> 90</span>
            </div>
          </div>
        </div>
      </div>
      <button
        className=" bg-3  michroma-2 rounded-md text-pale-4 p-1"
        onClick={logOut}
      >
        {" "}
        logout
      </button>
      <div className="divider w-full lg:w-[70vw] self-center mt-0"></div>
      <div className="w-full flex lg:w-[70vw] flex-row  ">
        <button onClick={()=>setSelected("games")} className={`${selected== "games" && "border-b-2"} w-[250px] hover:border-b-2 michroma-3  border-lime-600 transition-all ease-in-out text-left`}>
          games
        </button>
        <button onClick={()=>setSelected("friends")}className={`${selected== "friends" && "border-b-2"} w-[250px] hover:border-b-2 michroma-3  border-lime-600 transition-all ease-in-out text-left`}>
          friends
        </button>
      </div>
      <div>
   {   selected =="games" ?  <Games/>:<Friends/>}
      </div>
    </div>
  );
}

export default Profile;

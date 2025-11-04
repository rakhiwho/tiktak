import React from "react";
import Invite from "./Invite";
import Friends from "./Friends";
import LeaderBoard from "./LeaderBoard";
import Requests from "./Requests";

function Socials() {
  return (
    <div className="   bg-black h-[100vh] flex flex-col  pt-2 items-center w-[100vw] ">
      <div className="lg:items-start w-[70vw] flex flex-row justify-between ">
        <div>
          <Invite />
          <Friends />
        </div>
        <div className="flex flex-col justify-start">
          <Requests />
          <LeaderBoard />
        </div>
      </div>
    </div>
  );
}

export default Socials;

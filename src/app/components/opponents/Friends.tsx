import React from 'react'
import FriendsTag from '../sideBar/FriendsTag'

function Friends() {
  return (
      <div className="flex flex-col justify-start mt-4  w-[40vw] items-start">
      <div className="flex flex-row items-center justify-center">
        <p className="michroma-4 tracking-[2px] green-txt-1">Friends</p>
      </div>
      <div className=" top-0 left-0 w-full h-[1px] divider bg-slate-700 opacity-50 z-10" />

      <div className="  w-[40vw] h-[45vh] mt-2  flex flex-col items-center overflow-x-hidden overflow-y-scroll ">
            <FriendsTag pfp="" userName="meme_123" userId="workldhealthorg" />
            <FriendsTag pfp="" userName="meme_123" userId="workldhealthorg" />
            <FriendsTag pfp="" userName="meme_123" userId="workldhealthorg" />
            <FriendsTag pfp="" userName="meme_123" userId="workldhealthorg" />
            <FriendsTag pfp="" userName="meme_123" userId="workldhealthorg" />
            <FriendsTag pfp="" userName="meme_123" userId="workldhealthorg" />
       
      </div>
    </div>
  )
}

export default Friends

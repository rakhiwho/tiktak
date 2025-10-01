 'use client'
import ".././globals.css" ;
import { SocketContextProvider } from '../socketContext/socketContext';
import TicTacToe from '../components/game/TIkTacToe';
import SideBar from '../components/sideBar/SideBar';


function page() {
   const {onlineUsers} = SocketContextProvider();
  return (
    <div className=' flex justify-around w-[100vw] margin_home text-pale-1 bg-pale-2 h-[100vh]  '>
       <TicTacToe />
    </div>
   
  )
}

export default page

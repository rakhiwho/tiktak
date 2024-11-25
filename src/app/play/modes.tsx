import React from 'react'
import { SocketContextProvider } from '../socketContext/socketContext'
 

function MODES() {
     const {SOCKET}= SocketContextProvider();
     const user = localStorage.getItem('user')
    const playOnline = ()=>{
     SOCKET?.emit("join" , user );
    }
  return (
    <div>
      <div className=''>
          <div onClick={playOnline}>play online</div>
          <div>play offline</div>
          <div>play with a friend</div>

        </div>
    </div>
  )
}

export default MODES

 

 
'use client'
import React, { useContext, useEffect } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from 'next/navigation';
import { context, IContext } from '../context/UseContext'; // Import the correct context
import './style.css'
import "../global.css"
function Header() {
  const router = useRouter();

  // Use useContext to access the values from the context
  const { dis, setDis } = useContext<IContext>(context); 
useEffect(()=>{
 
},[dis])
  return (
    <div className={`flex  flex-row content-center items-center`}>
      <GiHamburgerMenu 
        onClick={() => setDis(!dis)} 
        className={` ${dis ? 'rotate-90' : ""} sm w-fit rotate-on-hover ham self-center p-1 size-7`} 
      />
      
      <h1 onClick={()=>router.push('/')} className=' caveat-6   text-4xl text-4 text-center ml-3 '>web_name</h1>
    </div>
  )
}

export default Header;

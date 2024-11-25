 

 
'use client'
import React, { useContext, useEffect } from 'react'
import pfp from '../fonts/favicon.png';
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { context, IContext } from '../context/UseContext'; // Import the correct context
import './style.css'
function Header() {
  const router = useRouter();

  // Use useContext to access the values from the context
  const { dis, setDis } = useContext<IContext>(context); 
useEffect(()=>{
 
},[dis])
  return (
    <div className={`flex  flex-row content-center`}>
      <GiHamburgerMenu 
        onClick={() => setDis(!dis)} 
        className={` ${dis ? 'rotate-90' : ""} sm w-fit rotate-on-hover ham self-center p-1 size-7`} 
      />
      <div>
        <Image className=' w-[8vw] sm:w-[4vw] md:w-[4vw] lg:w-[4vw] rounded-full' src={pfp} alt=":)" />
      </div>
      <h1 onClick={()=>router.push('/')} className='self-center'>webName</h1>
    </div>
  )
}

export default Header;

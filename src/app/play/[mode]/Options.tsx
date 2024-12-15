'use client'
import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import "./style.css"
interface RES {
    mode : string;
    left: string;
    click:string
}
const OPTIONS : React.FC<RES>   = ({mode , left , click}) =>{
  const router = useRouter();
  const [animate, setAnimate] = useState(false);
  const handleClick = () => {
    setAnimate(true);
   router.push(`/play/${click}`)
    // Reset animation state to allow retriggering
    setTimeout(() => setAnimate(false), 1000); // Match animation duration
  };

  
  return (
    <>
    { left =="" &&  <div onClick={handleClick} className={`  absolute right-[10%] z-[0] flex border-[1px] mt-2 p-2 border-pink-200   h-[10vh] w-fit bg-opacity-60 rounded-xl  `}>
     
      <FaArrowLeft className={`  ${animate ? "ani-arrow-left" :""}  size-6 mt-6 mr-3 `} />
      <div>
        <h1 className='text-pink-500 inline text-[5vh] font-sans capitalize'> {mode}</h1> 
      </div>
    
    </div>}
    { left =="left" &&  <div onClick={handleClick} className={` flex   z-[0]  absolute border-[1px] mt-2 p-2 border-pink-200  h-[10vh] w-fit bg-opacity-60 rounded-xl  `}>
      <div>
      <h1 className='text-pink-500 text-[5vh] inline font-sans capitalize'> {mode}</h1> 
      </div>
      <FaArrowRight className={`  ${animate ? "ani-arrow-right" :""}  size-6 mt-6 ml-3 `} />
    
    </div>}
    </>
   
  )

}

export default OPTIONS

<<<<<<< HEAD
import React, { FC, ReactNode } from 'react'
=======
import React from 'react'
>>>>>>> 65b2811a723d6bfbfa819c75e207eecd9c2d83b1
  
interface RES {
    result : string
}
<<<<<<< HEAD
const GAMEOVER : React.FC<RES>   = ({result}) =>{
  return (
    <div className=' fixed top-[30%] z-[100] left-[35%] flex flex-col items-center justify-center h-[20vh] w-[40vw] bg-opacity-60 bg-slate-300'>
      <h1 className='text-black'> {result}</h1> 
=======
function GAMEOVER(result : RES["result"] ) {
  return (
    <div className='flex flex-col items-center justify-center h-[20vh] w-[40vw] bg-opacity-60 bg-slate-300'>
      <h1> {result}</h1> 
>>>>>>> 65b2811a723d6bfbfa819c75e207eecd9c2d83b1
    </div>
  )
}

export default GAMEOVER

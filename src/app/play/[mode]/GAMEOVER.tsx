import React, { FC, ReactNode } from 'react'
  
interface RES {
    result : string
}
const GAMEOVER : React.FC<RES>   = ({result}) =>{
  return (
    <div className=' fixed top-[30%] z-[100] left-[35%] flex flex-col items-center justify-center h-[20vh] w-[40vw] bg-opacity-60 bg-slate-300'>
      <h1 className='text-black'> {result}</h1> 
    </div>
  )
}

export default GAMEOVER

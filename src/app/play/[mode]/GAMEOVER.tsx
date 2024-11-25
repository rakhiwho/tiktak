import React from 'react'
  
interface RES {
    result : string
}
function GAMEOVER(result : RES["result"] ) {
  return (
    <div className='flex flex-col items-center justify-center h-[20vh] w-[40vw] bg-opacity-60 bg-slate-300'>
      <h1> {result}</h1> 
    </div>
  )
}

export default GAMEOVER

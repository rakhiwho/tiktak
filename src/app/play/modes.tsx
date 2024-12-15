import React from 'react'
import { SocketContextProvider } from '../socketContext/socketContext'
import OPTIONS from './[mode]/Options';
import Divider from '../components/divider'; 
import { useRouter } from 'next/navigation';
function MODES() {
  
  return (
    <div className='bg-black h-[80vh] bg_photo bg-opacity-5 w-fit lg:w-[40vw] ml-[3vw] '>
      <div className='header text-2xl  font-md font-mono bg-white bg-opacity-50  w-[75vw] lg:w-[40vw] p-3 capitalize rounded-t-xl text-black  '> game modes </div>
         <div className='flex  flex-col justify-evenly content-center h-full'>
          <div  className='w-[70vw]' >  <OPTIONS mode='play online' left=''  click='online' /> </div>
            <Divider css='pr-2 w-[75vw] lg:w-[40vw] my-3 h-[0.5px] bg-white lg ' />
          <div className='w-[70vw]' > <OPTIONS mode='play with friend' left='left'  click='with_friend'  /> </div>
          <Divider css='pr-2 w-[75vw] lg:w-[40vw] my-3  h-[0.5px] bg-white lg ' />
          <div className='w-[70vw]' > <OPTIONS mode='offline' left=''  click=''  /> </div>
          <Divider css='pr-2 w-[75vw] lg:w-[40vw] my-3  h-[0.5px] bg-white lg ' />
         </div>
       
    </div>
  )
}

export default MODES

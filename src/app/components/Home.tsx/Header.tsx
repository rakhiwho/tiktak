import { User } from '@/app/reactIcons'
import Image from 'next/image'
import React from 'react'

function Header( {pfp , userName , userId} :  { pfp : string , userName : string  , userId :  string})  {
  return (
    <div className='flex flex-row justify-start  w-[70vw] items-center'>
        <div className='flex flex-row items-center justify-center'>

        <div className=" h-[50px]  w-[50px]  mt-2 rounded-full flex items-center overflow-hidden ">
            {  pfp ?    <Image
                  height={100}
                  width={100}
                  className="  h-[190px]  bg-cover "
                  alt="logo.jpg"
                  src="/media/logo.jpg"
                /> : <User className="text-[30px] text-lime-900 "/>} 
              </div>
              <div>
                <p className='michroma-4 tracking-[2px]'>{userName}</p>
              </div>
              
        </div>
                  </div>
  )
}

export default Header

'use client'

import React  from 'react'
 import { useRouter } from 'next/navigation'
import Divider from './divider';
function Content() {
    const router = useRouter();

  return (
    <div className='h-[100%]   fixed top-[4vh] bg_color p-4 animation_height overflow-hidden'>
     <ul className='ml-4 w-[20vw] '>
        <li onMouseEnter={(e)=>router.push(`/${e.target.innerText}`)} className='py-2 hover-bg'>profile</li>
       <Divider  css=''/>
        <li onMouseEnter={()=>router.push(`/`)}  className='py-2 hover-bg'>home</li>
        <Divider  css=''/>
        <li onMouseEnter={(e)=>router.push(`/${e.target.innerText}`)}  className='py-2 hover-bg'>play</li>
        <Divider  css=''/>
        <li onMouseEnter={(e)=>router.push(`/${e.target.innerText}`)}  className='py-2 hover-bg'>scores</li>
        <Divider  css=''/>
        <li onMouseEnter={(e)=>router.push(`/${e.target.innerText}`)}  className='py-2 hover-bg'>more</li>
        <Divider  css=''/>
     
         
     </ul>
   
    </div>
  )
}

export default Content

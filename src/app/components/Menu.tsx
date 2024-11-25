"use client"

import React,{useContext} from 'react'
import { context, IContext } from '../context/UseContext'; // Import the correct context
import Content from './Content';
import Divider from './divider';
import './style.css'
import './../globals.css'
import { useRouter } from 'next/navigation';
function Menu() {
  const router = useRouter();
    const { dis, setDis } = useContext<IContext>(context); 
  return (
    <div onMouseLeave={()=>setDis(false)}>
        <div className='sm fixed top-0  '>
{dis &&   <Content /> }
        </div>
        <div className='lg flex flex-col px-6  '>
        <Divider css='pr-2 w-[10vw] my-3  h-[0.5px] bg-white lg' />
            <p onMouseEnter={(e)=>router.push(`/${e.target.innerText}`)} className='pt-2 hover-bg lg '>profile</p>   
            <Divider css='pr-2 w-[10vw] my-3  h-[0.5px] bg-white lg ' />
            <p onMouseEnter={(e)=>router.push(`/`)} className='hover-bg lg'>home</p>   
            <Divider css='pr-2 w-[10vw] my-3  h-[0.5px] bg-white lg ' />
            <p onMouseEnter={(e)=>router.push(`/${e.target.innerText}`)} className='hover-bg lg'>play</p> 
            <Divider css='pr-2 w-[10vw] my-3  h-[0.5px] bg-white lg ' />   
            <p onMouseEnter={(e)=>router.push(`/${e.target.innerText}`)} className='hover-bg lg'>scores</p>   
            <Divider css='pr-2 w-[10vw] my-3  h-[0.5px] bg-white  lg' /> 
            <p onMouseEnter={(e)=>router.push(`/${e.target.innerText}`)} className='hover-bg lg'>more</p>  
            <Divider css='pr-2 w-[10vw] my-3  h-[0.5px] bg-white lg' /> 
            <p></p>   
        </div>
    </div>
  )
}

export default Menu

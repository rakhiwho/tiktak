'use client'
import React,{useState} from 'react'
import '../components/style.css'
 import { TIKTAKTOE } from '../hooks/easy-comp'
import MODES from './modes'
import Game1 from './[mode]/game1'
import DECOR from './DECOR'

function page() {
  const game = new TIKTAKTOE(); 
 
  return (
    <div className='flex justify-between margin_home p-6 w-[80vw] flex_body'>
         
    <div className=' decor_visibility' >
    <DECOR />
      </div> 
        <div className=''>
          <MODES/>
        </div>
    </div>
  )
}

export default page

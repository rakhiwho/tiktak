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
<<<<<<< HEAD
    <div className='flex justify-between margin_home p-6 w-[80vw] flex_body'>
         
    <div className=' decor_visibility' >
    <DECOR />
      </div> 
=======
    <div className=' margin_home p-6 flex_body'>
         
      <DECOR />
>>>>>>> 65b2811a723d6bfbfa819c75e207eecd9c2d83b1
        <div className=''>
          <MODES/>
        </div>
    </div>
  )
}

export default page

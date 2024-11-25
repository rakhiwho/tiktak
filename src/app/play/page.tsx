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
    <div className=' margin_home p-6 flex_body'>
         
      <DECOR />
        <div className=''>
          <MODES/>
        </div>
    </div>
  )
}

export default page

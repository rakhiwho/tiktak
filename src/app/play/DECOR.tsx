"use client"
import React from 'react'
import Image from 'next/image';
import { TIKTAKTOE } from '../hooks/easy-comp';
import { UserContextProvider } from '../context/UseContext';
import Game1 from './[mode]/game1';
import './style.css'
function DECOR() {
    const {user} = UserContextProvider();
    const game = new TIKTAKTOE();
    const url = "../fonts/default.png"
  return (
    <div className='p-3 bg_color '>
 
      <div>
        <Game1 game={game} />
      </div>
      
       
    </div>
  )
}

export default DECOR

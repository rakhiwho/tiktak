<<<<<<< HEAD

'use client'
import React from 'react'
import Game1 from './game1'
 import {TIKTAKTOE} from '../../hooks/easy-comp'
import WithFriend from './WithFriend';

export default function page({params}:{ params: { mode: string } }) {
  const game = new TIKTAKTOE();
  return (
    <div>
       <div className=" bg-black flex flex-col items-center justify-center min-h-screen py-2">
    <h1><span className='text-slate-50 text-2xl font-mono  '>play :{params.mode}</span></h1>
    <WithFriend />
=======
import React from 'react'
import Game1 from '../game1'

export default function page({params}:{ params: { mode: string } }) {
  return (
    <div>
       <div className=" bg_page   flex flex-col items-center justify-center min-h-screen py-2">
    <h1><span className='text-slate-50'>{params.mode}</span></h1>
>>>>>>> 65b2811a723d6bfbfa819c75e207eecd9c2d83b1
  </div>
    </div>
  )
}

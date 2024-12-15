
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
  </div>
    </div>
  )
}

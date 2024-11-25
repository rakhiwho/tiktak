import React from 'react'
import Game1 from '../game1'

export default function page({params}:{ params: { mode: string } }) {
  return (
    <div>
       <div className=" bg_page   flex flex-col items-center justify-center min-h-screen py-2">
    <h1><span className='text-slate-50'>{params.mode}</span></h1>
  </div>
    </div>
  )
}

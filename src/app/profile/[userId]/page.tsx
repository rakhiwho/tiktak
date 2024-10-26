import React from 'react'
import '../../globals.css'
function profilebyId({params}:{ params: { userId: string } }) {
  
  return (
    <div className=" bg_page   flex flex-col items-center justify-center min-h-screen py-2">
    <h1>PROFILE:</h1>
    <p>profile of <span className='text-slate-50'>{params.userId}</span></p>

  </div>
  )
}

export default profilebyId

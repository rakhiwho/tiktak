'use client'
import SideBar from '@/app/components/sideBar/SideBar'
import React from 'react'
import OfflineGame from '../components/game/OfflineGame'

function page() {
  return (
    <div className=' h-[100vh] national-bg w-[100%] flex lg:flex-row  flex-col overflow-y-scroll justify-start items-center '>
      <SideBar/>
      <div className=' flex flex-row items-center justify-center w-[70%]'>

      <OfflineGame/>
      </div>
    </div>
  )
}

export default page

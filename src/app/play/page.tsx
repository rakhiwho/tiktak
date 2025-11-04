'use client'
import SideBar from '@/app/components/sideBar/SideBar'
import React from 'react'
import OfflineGame from '../components/game/OfflineGame'
import Socials from '../components/opponents/Socials'

function page() {
  return (
    <div className=' h-[100vh] national-bg w-[100%] flex lg:flex-row  flex-col overflow-y-scroll justify-start items-center '>
      <Socials/>
    </div>
  )
}

export default page

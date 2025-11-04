import { Mail, Phone } from '@/app/reactIcons'
import React from 'react'

function Invite() {
  return (
    <div className='flex flex-row   w-[40vw] justify-between '>
      <div className='flex w-[250px] national-bg michroma-3  p-2 rounded-md flex-row justify-between  items-center '>
       <div><Mail className="text-[40px] text-lime-900 "/></div>
       <div>Invite through mail</div>
      </div>
        <div className='flex w-[280px] national-bg michroma-3  p-2 rounded-md flex-row justify-between  items-center '>
  <div><Phone className="text-[40px] text-lime-900 "/></div>
       <div>Invite through number</div>
      </div>
    </div>
  )
}

export default Invite

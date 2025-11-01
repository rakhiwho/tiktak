import Image from 'next/image'
import React from 'react'
import OPtBlocks from './OPtBlocks'

function Select() {

  return (
    <div className=' flex md:flex-row items-center pl-0  flex-col mt-4 md:w-[70vw]  lg:w-[70vw] justify-between'>
     <OPtBlocks />
     <OPtBlocks />
  
    </div>
  )
}

export default Select

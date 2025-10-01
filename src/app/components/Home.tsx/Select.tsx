import Image from 'next/image'
import React from 'react'
import OPtBlocks from './OPtBlocks'

function Select() {

  return (
    <div className='flex mt-4 w-[70vw] justify-between'>
     <OPtBlocks />
     <OPtBlocks />
     <OPtBlocks />
    </div>
  )
}

export default Select

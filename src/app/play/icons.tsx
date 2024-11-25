import React from 'react'
import {IconsProps} from "../../interface/IUser"
import { PiCircleBold } from "react-icons/pi";
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";

function IconsJSX({move}:IconsProps ) {
 
  if(move =="x"){
    return (
      <div className=' flex flex-col items-center justify-center'>
        <RxCross2 className='size-10 md:size-24 ' />
      </div>
    )
  }else{
    return (
      <div className=' flex flex-col items-center justify-center'>
        <PiCircleBold className='size-10 md:size-24'/>
      </div>
    )
  }
 
}

export default IconsJSX

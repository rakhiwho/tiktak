import { Alien, Cross, Flower } from '@/app/reactIcons'
import React from 'react'

function Turn({turn } : { turn : string}) {
  return (
    <div>
     { turn == "O"  && <Flower className="text-[30px] text-pink-900 size-16 "/> }
     { turn == "X" &&   <Cross className="text-[30px] text-lime-700 "/>}
    </div>
  )
}

export default Turn

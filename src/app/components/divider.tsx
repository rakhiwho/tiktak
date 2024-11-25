import React from 'react'

function Divider({css  } : {css :string}) {
  return (
    <div className={css || 'h-[1px] w-full bg-white '}>
      
    </div>
  )
}

export default Divider

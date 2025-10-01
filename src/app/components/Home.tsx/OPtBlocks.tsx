import React, { useRef, useState } from 'react'

function OPtBlocks() {
    const [play , setPlay] = useState(false);
    
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef?.current.play();
  };

  const handleMouseLeave = () => {
    videoRef?.current.pause();
  };

  return (
   <div>
         <div  onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave} className="card rounded-md overflow-hidden  w-96 shadow-sm">
     <video
     ref={videoRef}
        className=" absolute w-[300px]  top-0 left-0  h-full "
        src={"/media/selectBGVid.mp4"}
        autoPlay
        loop
        muted
      />
    <div className=" h-[300px] relative bg-lime-950 bg-opacity-70 z-10 card-body">
      <h2 className="card-title michroma-3 text-[20px] capitalize green-txt-2 ">play_friend_</h2>
      <p className='michroma-2  text-[16px] capitalize'> play 9 rounds with yoour friend  </p>
      <div className="card-actions justify-end">
      </div>
    </div>
  </div>
        </div>
  )
}

export default OPtBlocks

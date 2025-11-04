import React, { useRef } from 'react'

function OPtBlocks() {
    
  const videoRef =  useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current!.play();
  };

  const handleMouseLeave = () => {
    videoRef.current!.pause();
  };

  return (
   <div>
         <div  onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave} className="card rounded-md ml-0 md:h-[180px] h-[150px] mb-1  overflow-hidden  w-[500px] md:w-[260px] lg:w-[32vw] shadow-sm">
     <video
     ref={videoRef}
        className=" absolute lg:w-[400px] md:w-[200px] w-[400px] top-0 left-0  bg-cover   "
        src={"/media/selectBGVid.mp4"}
        autoPlay
        loop
        muted
      />
    <div className=" h-[300px] relative bg-lime-950 bg-opacity-70 z-10 card-body">
      <h2 className="card-title michroma-3 lg:text-[20px]  capitalize green-txt-2 ">play_friend_</h2>
      <p className='michroma-2  text-[16px] capitalize'> play 9 rounds with your friend  </p>
      <div className="card-actions justify-end">
      </div>
    </div>
  </div>
        </div>
  )
}

export default OPtBlocks

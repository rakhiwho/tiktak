"use client";

import "./globals.css";
import "./styles/animations.css"
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full "
        src={"/media/bgPc.mp4"}
        autoPlay
        loop
        muted
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />

      <div className="relative z-20 flex items-center justify-center h-full text-white text-center">
        <div className="max-w-fit p-4  bg-lime-900  rounded-md bg-opacity-40">
          <h1 className="mb-5 text-5xl w-fit font-bold fontBIT text-[80px] ">TIC-TAC-TOE</h1>
          <p className="mb-5  max-w-lg michroma-1">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button onClick={()=>router.push("/home")} className="btn bgAni michroma-5 text-xl rounded-lg bg-black ">Get Started</button>
        </div>
      </div>
      
    </div>
  );
}

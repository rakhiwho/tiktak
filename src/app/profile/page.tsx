"use client";
import React from "react";
import axios from 'axios'; 
import "../global.css"
import { useRouter } from 'next/navigation';

function Profile() {
 const router = useRouter(); 
 
 const logOut = async ()=>{
   const  res = await axios.get( "api/users/logout" , {withCredentials : true})
   localStorage.clear();
   console.log(res.data)
   router.push("./login")
 }


  return (
    <div className=" bg-pale-2 text-black quick-6  margin_home width_uni 
     flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-xl">PROFILE:</h1>
      <p>profile</p>
      
      <button className=' bg-3 rounded-md text-pale-4 p-2' onClick={logOut}  > logout</button>
    </div>
  )
}

export default Profile

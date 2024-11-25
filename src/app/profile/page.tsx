"use client";
import React from "react";
import axios from 'axios'; 
import { useRouter } from 'next/navigation';

function Profile() {
 const router = useRouter(); 

 const logOut = async ()=>{
   const  res = await axios.get( "api/users/logout" , {withCredentials : true})
   console.log(res.data)
 }


  return (
    <div className="bg_page margin_home width_uni 
     flex flex-col items-center justify-center min-h-screen py-2">
      <h1>PROFILE:</h1>
      <p>profile</p>
      
      <button className='bg-green-950 p-2' onClick={logOut}  > logout</button>
    </div>
  )
}

export default Profile

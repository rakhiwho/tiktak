"use client";
import React from "react";
import axios from 'axios'; 
import { useRouter } from 'next/navigation';

function Profile() {
 const router = useRouter(); 

 const logout = async ()=>{
  try {
    
     const res = await axios.get('/api/users/logout');
     router.push('/login')
  console.log(res)
  } catch (error) {
    console.log(error)
  }
 }  
  return (
    <div className="bg_page margin_home width_uni  flex flex-col items-center justify-center min-h-screen py-2">
      <h1>PROFILE:</h1>
      <p>profile</p>
      
      <button className='bg-green-950 p-2' onClick={logout} > logout</button>
    </div>
  )
}

export default Profile

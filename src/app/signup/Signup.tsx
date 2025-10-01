"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios"; 

function SignupPage() {
   const router = useRouter();
  const [user, setUser] = React.useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      user.userName.length > 0 &&
      user.password.length > 0 &&
      user.email.length > 0
    ) {
      const res = await axios.post(`/api/users/signup`, { userName : user.userName , password : user.password , email : user.email });
      console.log(res);
      setUser({ userName: "", email: "", password: "" });
      if(res.data){
      router.push('/login')
      
      }
    } else {
      alert("enter all crediesntials");
    }
  };
  return (
    <div className="  flex flex-col items-center justify-center min-h-screen py-2">
        <video
        className="absolute top-0 left-0 w-full h-full "
        src={"/media/bgPc.mp4"}
        autoPlay
        loop
        muted
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
      <h1 className="text-center">sign-up:</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col content-between h-[19vh] justify-around  "
      >
        <div>
          <input
            value={user.userName}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
            type="text"
            name="userName"
            placeholder="username "
            id="userName"
            className="text-black rounded-md "
          />
        </div>
        <div>
          <input
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="text"
            name="email"
            id="email"
            placeholder="email"
            pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
            title="Please enter a valid email address"
            className="rounded-md text-black"
          />
        </div>
        <div>
          <input
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            name="password"
            id="password"
            placeholder="password"
            minLength={3}
            maxLength={10}
            className="text-black rounded-md "
          />
        </div>
        <button type="submit" className={``}>
          signIn
        </button>
      </form>
      <Link href="login">already signed up?! login</Link>
    </div>
  );
}

export default SignupPage;

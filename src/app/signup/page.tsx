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
      const res = await axios.post("/api/users/signup", { userName : user.userName , password : user.password , email : user.email });
      console.log(res);
      setUser({ userName: "", email: "", password: "" });
      router.push('/login')
    } else {
      alert("enter all crediesntials");
    }
  };
  return (
    <div className="bg-black  flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center">sign-up:</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col content-between h-[19vh]  "
      >
        <div>
          <label htmlFor="userName">USERNAME:</label>
          <input
            value={user.userName}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
            type="text"
            name="userName"
            id="userName"
            className="text-black"
          />
        </div>
        <div>
          <label htmlFor="email">EMAIL:</label>
          <input
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="text"
            name="email"
            id="email"
            pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
            title="Please enter a valid email address"
            className="ml-11 text-black"
          />
        </div>
        <div>
          <label htmlFor="password">PASSWORD:</label>
          <input
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            name="password"
            id="password"
            placeholder="password"
            minLength={3}
            maxLength={10}
            pattern="^[0-9]{2}[a-zA-Z]+$"
            className="text-black"
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

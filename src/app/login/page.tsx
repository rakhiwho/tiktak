"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

function LoginPage() {
  const [user, setUser] = React.useState({
    userName: "",
    password: ""
  });
  const [loading , setLoading] = useState(false)
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      user.userName.length > 0 &&
      user.password.length > 0 ) {
        setLoading(true)
      const res = await axios.post("/api/users/login", {
        userName: user.userName,
        password: user.password,
      });
      setLoading(false)
   
      setUser({ userName: "", password: "" });

      console.log("Login Response:", res); // Check the response status
      if (res.status === 200) {
        // Clear form fields
        setUser({ userName: "", password: "" });

        // Navigate to the profile page
        router.push("/profile");
      } else {
        console.error("Login failed:", res.data.message);
        alert("Login failed: " + res.data.message);
      }
    } else {
      alert("enter all crediesntials");
    }
  };
  return (
    <div className="bg-black  flex flex-col items-center justify-center min-h-screen py-2">
      {loading && <h1>proccessing...</h1>}
      {!loading &&<>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col content-between  "
      >
        <div>
         
          <input
            value={user.userName}
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
            type="text"
            name="userName"
            id="userName"
            placeholder="username"
            title="Please enter a valid userName address"
            className="mb-2 text-black rounded-xl pl-2"
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
            pattern="^[0-9]{2}[a-zA-Z]+$"
            className="text-black rounded-xl pl-2 "
          />
        </div>
        <input type="submit" value=" login" />
      </form>
      <Link href="signup">have not signed up yet ?! sign-up</Link></>}
    </div>
  );
}

export default LoginPage;

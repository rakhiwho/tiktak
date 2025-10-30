"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import "../styles/animations.css";
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
      const res = await axios.post(`/api/users/signup`, {
        userName: user.userName,
        password: user.password,
        email: user.email,
      });
      console.log(res);
      setUser({ userName: "", email: "", password: "" });
      if (res.data) {
        router.push("/login");
      }
    } else {
      alert("enter all crediesntials");
    }
  };
  return (
    <div className=" flex flex-col items-center justify-center relative h-screen w-screen overflow-hidden">
      <video
        className="absolute z-0 top-0 left-0 w-full h-full "
        src={"/media/bgPc.mp4"}
        autoPlay
        loop
        muted
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex relative z-20   flex-col content-between  justify-around h-fit items-center"
      >
        <h1 className="text-center michroma-5 text-3xl ">sign up:</h1>
        <div className="divider w-[400px] self-center"></div>
        <div className=" px-[10vw]">
          <div className="flex flex-col">
            <p
              className={` ${
                user.userName != "" ? "show " : "hidden_custom"
              }  michroma-1  pb-1 `}
            >
              username
            </p>
            <input
              value={user.userName}
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              type="text"
              name="userName"
              placeholder="username "
              id="userName"
              className=" bg-white bg-opacity-40 text-lime-950 michroma-8 mb-2 border-none outline-none p-1 rounded-md "
            />
          </div>
          <div className="flex flex-col">
            <p
              className={` ${
                user.email != "" ? "show " : "hidden_custom"
              }  michroma-1  pb-1 `}
            >
              email
            </p>

            <input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="text"
              name="email"
              id="email"
              placeholder="email"
              pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
              title="Please enter a valid email address"
              className=" bg-white bg-opacity-40 text-lime-950 michroma-8 mb-2 border-none outline-none p-1 rounded-md "
            />
          </div>
          <div className="flex flex-col">
            <p
              className={` ${
                user.password != "" ? "show " : "hidden_custom"
              }  michroma-1  pb-1 `}
            >
              password
            </p>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              name="password"
              id="password"
              placeholder="password"
              minLength={3}
              maxLength={10}
              className=" bg-white bg-opacity-40 text-lime-950 michroma-8 mb-2 border-none outline-none p-1 rounded-md "
            />
          </div>
          <button
            type="submit"
            className="btn bgAni michroma-5 text-xl  border-none rounded-lg mt-3 bg-slate-600"
          >
            {" "}
            SIGN UP{" "}
          </button>
        </div>
      </form>
      <div className="divider relative z-20 w-[600px] self-center"></div>

      <Link
        className="relative michroma-1 mt-[10px] z-20 text-white tracking-[3px] "
        href="login"
      >
        already signed up?! login
      </Link>
    </div>
  );
}

export default SignupPage;

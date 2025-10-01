"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

function LoginPage() {
  const [user, setUser] = React.useState({
    userName: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user.userName.length > 0 && user.password.length > 0) {
      setLoading(true);
      const res = await axios.post(
        `/api/users/signin`,
        {
          userName: user.userName,
          password: user.password,
        }
      );
      console.log(res);
      setLoading(false);

      if (res.status === 200) {
        setUser({ userName: "", password: "" });
        localStorage.setItem("user", res.data.type._id);
        console.log(res.data.type);
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
     <div className=" flex flex-col items-center justify-center relative h-screen w-screen overflow-hidden">
      <video
        className="absolute z-0 top-0 left-0 w-full h-full "
        src={"/media/bgPc.mp4"}
        autoPlay
        loop
        muted
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
      {loading && <h1>proccessing...</h1>}
      {!loading && (
        <>
        <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex relative z-20   flex-col content-between  justify-around h-fit items-center"
      >
        <h1 className="text-center michroma-5 text-3xl ">SIGN IN:</h1>
        <div className="divider w-[400px] self-center"></div>
        <div className="border-x-[1px] w-fit border-slate-400 border-opacity-30 px-[10vw]">

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
           <p className="mb-5 text-sm text-white max-w-lg michroma-1">forgot Password?</p>
        </div>
       <button type="submit" className="btn bgAni michroma-5 text-xl  border-none rounded-lg mt-3 bg-slate-600"> SIGN IN </button>
            </div>
      </form>
 <Link className="relative michroma-1 mt-[20px] z-20 text-white tracking-[3px] "href="signup">have not signed up yet ?! sign-up</Link>
    <div className="divider relative z-20 w-[600px] self-center"></div>

        <p className="mb-5 relative z-20 text-sm tracking-[2px]  text-lime-800 text-opacity-75 max-w-lg michroma-6 text-center">By clicking "sign up" you agree to <br/> our terms | privicy policy</p>
        </>
      )}
    </div>
  );
}

export default LoginPage;

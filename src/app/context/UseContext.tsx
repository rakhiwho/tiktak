"use client";

import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

 export function UserContextProvider (){
    return useContext<IContext>(context);
 }
export interface IContext {
  loggedIn: string;
  dis:boolean;
  setDis(dis:boolean):void;
  user : string|null;
  setUser (user : string):void;

}

const defaultval: IContext = {
  loggedIn: "",
  dis:false,
  setDis : ()=>null,
  user :"",
  setUser : ()=>null
};

 export  const context = createContext<IContext>(defaultval);

function UseContext({ children }) {
  const [cookies] = useCookies(["accessToken"]);
  const [loggedIn, setLoggedIn] = useState(cookies.accessToken?.value);
  const [dis , setDis] = useState(false)
  const [user , setUser] = useState<string>("")
  const [path , setPath ]= useState(window.location.href);
  

  const userInfo = async ()=>{
    try {
     const res = await axios.get(`/api/users/me` );
      setUser(res.data.user.userName)
    
      localStorage.setItem("user" , res.data.user._id);
    } catch (error :any ) {
     console.log(error)
    }
   }
   useEffect(() => {
    if (typeof window !== "undefined") {
      setPath(window.location.href);
      userInfo();
    
    }
  }, [path]);

  
  const valContext: IContext = {
    loggedIn,
    dis,
    setDis,
    user,
    setUser
  };


  return <context.Provider value={valContext}>{children}</context.Provider>;
}

export default UseContext;

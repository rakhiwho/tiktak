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

}

const defaultval: IContext = {
  loggedIn: "",
  dis:false,
  setDis : ()=>null
};

 export  const context = createContext<IContext>(defaultval);
function UseContext({ children }) {
  const [cookies] = useCookies(["accessToken"]);
  const [loggedIn, setLoggedIn] = useState(cookies.accessToken?.Value);
  const [dis , setDis] = useState(false)
  const [path , setPath ]= useState
  console.log(loggedIn);
  const valContext: IContext = {
    loggedIn,
    dis,
    setDis
  };
  const userInfo = async ()=>{
   try {
     const res = await axios.get('/user/me');
     console.log(res.data);
   } catch (error :any ) {
    console.log(error)
   }
  }
useEffect(()=>{
  userInfo();
},[])

  return <context.Provider value={valContext}>{children}</context.Provider>;
}

export default UseContext;

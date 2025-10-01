import UserModel from "@/model/user";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "../get.tokendata";




export async function GET( req  :NextRequest){
   try{
      const userId = await getDataFromToken(req);
      const arr = await UserModel.find({_id : {$ne :userId}});
      return NextResponse.json({type : arr} , {status : 200})
   }catch(error :any){
     console.log(error)
    return  NextResponse.json({type : "something went wrong"} , {status : 500})
   }
}    
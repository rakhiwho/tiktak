import  jwt  from "jsonwebtoken";
import { NextRequest } from "next/server";


interface TokenPayload {
    _id: string;
    userName: string;
    email: string;
  }

export async function getDataFromToken(req: NextRequest) {
    try {
        const token = req.cookies.get("token")?.value || '';
      const decodedToken   =  jwt.verify(token , process.env.TOKEN_SECRETE !) as TokenPayload;
      return decodedToken._id;
    } catch (error : any) {
        console.log(error )
        throw new Error(error?.message || "token varification failed")
    }
}
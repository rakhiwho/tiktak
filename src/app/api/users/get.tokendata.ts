import { UserError } from "@/error/userError";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
 

interface TokenPayload {
  _id: string;
  userName: string;
  email: string;
}

export async function getDataFromToken(req: NextRequest) {
  try {
    const token = req.cookies.get("refreshToken")?.value || "";
    if (!token) {
      return NextResponse.json(
        { type: UserError.UNAUTHORIZED_USER },
        { status: 401 }
      );
    }
    const decodedToken = jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET!
    ) as TokenPayload;
     return decodedToken._id ;
  } catch (error: any) {
    console.log(error);
    
  }
}

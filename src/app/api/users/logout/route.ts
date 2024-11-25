import { NextApiRequest  } from "next";
import UserModel from "@/model/user";
import { IUser } from "@/interface/IUser";
import { UserResponse } from "@/OKRespose/User";
import { NextRequest, NextResponse } from "next/server";
import { statusError } from "@/error/status.errors";
import { UserError } from "@/error/userError";
import { getDataFromToken } from "@/helpers/get.tokendata";

export interface AuthenticatedRequest extends Request {
  user?: IUser;
}

export async function GET(req: NextRequest ) {
  try {
      
    const userId = await getDataFromToken(req);
    console.log(userId);
    const user =  await UserModel.findById(userId);
    if (!user || !user._id) {
      return NextResponse.json({ type: UserError.UNAUTHORIZED_USER }, { status: 401 });
    }
    
    await UserModel.findByIdAndUpdate(
      user._id,
      {
        $unset: {
          refreshToken: 1, 
        },
      },
      {
        new: true,
      }
    );
 

    return NextResponse.json(
      { type: UserResponse.USER_LOGGED_OUT },
      {
        status: 200,
        headers: {
          "Set-Cookie": [
            `accessToken=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict`,
            `refreshToken=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict`,
          ].join(","),
        },
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { typr: statusError.INTERNAL_SERVER_ERROR },
      { status: 500 }
    );
  }
}

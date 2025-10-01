import { UserError } from "@/error/userError";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import UserModel from "@/model/user";
import { getDataFromToken } from "../get.tokendata";

interface TokenPayload {
  _id: string;
  userName: string;
  email: string;
}

export const POST = async (req: NextRequest) => {
  try {
    const { refreshToken } = await req.json();

    if (!refreshToken) {
      return NextResponse.json( {type : "user unauthorized"} , {status : 406})
    }
    const userId = await getDataFromToken(req);
    const User = await UserModel.findById(userId);

    const decodedToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET!
    ) as TokenPayload;
    if (!decodedToken) {
      return NextResponse.json(
        { type: UserError.WRONG_CREDENTIALS },
        { status: 404 }
      );
    }
    User.accessToken = User.generateAccessToken();

    return NextResponse.json(
      {
        type: {
          refreshToken: User.refreshToken,
          accessToken: User.refreshToken,
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ type: "something went wrong" }, { status: 500 });
  }
};

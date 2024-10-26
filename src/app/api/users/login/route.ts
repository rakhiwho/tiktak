import db from "@/dbConfig/dbConfig";
import UserModel from "@/model/user";
import { NextRequest, NextResponse } from "next/server";
import { UserError } from "@/error/userError";
import { UserResponse } from "@/OKRespose/User";
import { statusError } from "@/error/status.errors";
import { generate_Access_Refresh_Token } from "@/helpers/auth.hepers";
import { cookies } from "next/headers";

db();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { userName, password } = reqBody;
 
    if ([userName, password].some((field) => field?.trim() === "")) {
      return NextResponse.json(
        { type: UserError.MISSING_INFO },
        { status: 400 }
      );
    }

    //checking if user exists
    const user = await UserModel.findOne({ userName });

    if (!user) {
      return NextResponse.json(
        { type: UserError.NO_USER_FOUND },
        { status: 404 }
      );
    }

    const password_is_valid = await user.isPasswordCorrect(password);
    if (!password_is_valid) {
      return NextResponse.json(
        { type: UserError.WRONG_CREDENTIALS },
        { status: 400 }
      );
    }
    const { refreshToken, accessToken } = await generate_Access_Refresh_Token(
      user._id
    );
    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    };

    const response = NextResponse.json(
      { type: "logged in successfully" + user },
      { status: 200 }
    );

    // Set cookies
    response.cookies.set("accessToken", accessToken, options);
    response.cookies.set("refreshToken", refreshToken, options);

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { type: statusError.INTERNAL_SERVER_ERROR },
      { status: 500 }
    );
  }
}

import db from "@/dbConfig/dbConfig";
import UserModel from "@/model/user";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { UserError } from "@/error/userError";
import { UserResponse } from "@/OKRespose/User";
import { statusError } from "@/error/status.errors";

  db(); // batabase connection method

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { userName, password, email } = reqBody;
    console.log(reqBody);
    if (
      [  email, userName, password].some((field) => field?.trim() === "")
  ) {
    return NextResponse.json(
      { type: UserError.MISSING_INFO},
      { status: 400 }
    );
  }

    //checking if user exists
    const user = await UserModel.findOne( {userName} );
    if (user) {
      return NextResponse.json(
        { type: UserError.USERNAME_ALREADY_EXISTS },
        { status: 400 }
      );
    }
    console.log(password)
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const new_user = new UserModel({
      userName,
      email,
      password: hashedPassword,
    });

    const saved_User = await new_user.save();
     console.log(saved_User)
    return NextResponse.json(
      { type: UserResponse.USER_CREATED, success: true, saved_User },
      { status: 201 }
    );
  } catch (error) {
     console.log(error);
    return NextResponse.json(
      { type: statusError.INTERNAL_SERVER_ERROR},
      { status: 500 }
    );
  }
}

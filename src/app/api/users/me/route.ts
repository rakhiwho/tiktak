import db from "@/dbConfig/dbConfig";
import { statusError } from "@/error/status.errors";
import { getDataFromToken } from "@/helpers/get.tokendata";
import UserModel from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

db(); //database
export async function GET(req: NextRequest) {
  try {
    const userId = await getDataFromToken(req);
    const user = await UserModel.findOne({ _id: userId }).select("-password");
    return NextResponse.json({
      message: "user found!",
      data: user,
    });
  } catch (error: any) {
    console.log(error);
    NextResponse.json(
      { type: statusError.INTERNAL_SERVER_ERROR },
      { status: 500 }
    );
  }
}

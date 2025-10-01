import { statusError } from "@/error/status.errors";
import { UserError } from "@/error/userError";
import UserModel from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { type: UserError.MISSING_INFO },
        { status: 400 }
      );
    }
    const user = await UserModel.findById(id);
    if (!user) {
      return NextResponse.json(
        { type: UserError.NO_USER_FOUND },
        { status: 404 }
      );
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { type: statusError.INTERNAL_SERVER_ERROR },
      { status: 500 }
    );
  }
};

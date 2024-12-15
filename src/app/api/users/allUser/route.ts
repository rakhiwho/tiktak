import UserModel from "@/model/user";
import { IUser } from "@/interface/IUser";
import { NextRequest, NextResponse } from "next/server";
import { statusError } from "@/error/status.errors";
import { UserError } from "@/error/userError";
import { getDataFromToken } from "@/helpers/get.tokendata";

export interface AuthenticatedRequest extends Request {
  user?: IUser;
}

export async function GET(req: NextRequest) {
  try {
    const userId = await getDataFromToken(req);
    const user = await UserModel.findById(userId);
    const users = await UserModel.find({ _id: { $ne: userId } });

    if (!user) {
      return NextResponse.json(
        { type: UserError.UNAUTHORIZED_USER },
        { status: 401 }
      );
    }

    return NextResponse.json({type : users }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { type: statusError.INTERNAL_SERVER_ERROR },
      { status: 500 }
    );
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import UserModel from "@/model/user";
import { IUser } from "@/interface/IUser";

 
export interface AuthenticatedRequest extends NextApiRequest {
  user?: IUser;
}

export async  function GET (req: AuthenticatedRequest, res: NextApiResponse){
  try {
     
    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: "User not authenticated" });
    }

     
    await UserModel.findByIdAndUpdate(req.user._id, {
      $unset: {
        refreshToken: 1, // Remove refreshToken field from user document
      },
    }, {
      new: true,  
    });

     
    res.setHeader("Set-Cookie", [
      `accessToken=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict`,
      `refreshToken=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict`,
    ]);

    return res.status(200).json({ message: "User logged out" });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Logout failed" });
  }
};

 
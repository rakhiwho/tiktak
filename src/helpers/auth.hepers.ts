import { statusError } from "@/error/status.errors";
import { UserError } from "@/error/userError";
import {  Tokens } from "@/interface/IUser";
import UserModel from "@/model/user";
import mongoose from "mongoose";
import { ApiError } from "next/dist/server/api-utils";
 
 interface Tokens {
    accessToken: string;
    refreshToken: string;
}
async function generate_Access_Refresh_Token(userId: string | mongoose.Types.ObjectId) :Promise<Tokens>{
  
    try {
        const User = await UserModel.findById(userId);

        if (!User) {
            throw new ApiError(404, UserError.NO_USER_FOUND);
        }
        const accessToken = User.generateAccessToken();
        const refreshToken = User.generateRefreshToken();

        User.refreshToken = refreshToken;
        await User.save();

        return { accessToken, refreshToken };
    } catch (error) {
        console.log(error);
        throw new ApiError(500, statusError.INTERNAL_SERVER_ERROR);
    }
}
export {generate_Access_Refresh_Token}
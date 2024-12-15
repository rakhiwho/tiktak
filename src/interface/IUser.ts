import mongoose from "mongoose";

interface IUser extends Document {
  _id: string;
    userName: string;
    email: string;
    password: string;
    isVerified: boolean;
    isAdmin: boolean;
    forgotPasswordToken: string;
    forgotPasswordExpiry: Date;
    verifyToken: string;
    verifyTokenEXpiry: Date;
    refreshToken: string;
    refreshTokenEXpiry: Date;
    friend : mongoose.Schema.Types.ObjectId;
    invites:[number];
    //methods 
    isPasswordCorrect(password :string) : Promise<boolean>;
    generateAccessToken():string;
    generateRefreshToken():string;
  }
  interface JwtPayload {
    _id: string;
    email: string;
    username: string;
  }
  interface IconsProps {
    move: string;  
 
  }
  export type {IUser , JwtPayload , IconsProps}
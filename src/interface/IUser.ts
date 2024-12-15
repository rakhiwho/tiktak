<<<<<<< HEAD
import mongoose from "mongoose";
=======
>>>>>>> 65b2811a723d6bfbfa819c75e207eecd9c2d83b1

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
<<<<<<< HEAD
    friend : mongoose.Schema.Types.ObjectId;
    invites:[number];
=======
>>>>>>> 65b2811a723d6bfbfa819c75e207eecd9c2d83b1
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
import { TRegisterUser } from "./auth.interface";
import * as bcrypt from "bcrypt";
import { User } from "./auth.model";
import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import { createToken } from "./auth.utils";
import config from "../../config";
import { JwtPayload } from "jsonwebtoken";

const registerUser = async(payload: TRegisterUser)=>{
    payload.password = await bcrypt.hash(payload.password,10);
    const result = await User.create(payload);
    return result;

}

const loginUser = async(payload:TRegisterUser)=>{
    //checking if the user exist
    const user = await User.isUserExistsByEmail(payload.email);
    if(!user){
        throw new AppError(StatusCodes.NOT_FOUND,'User does not exist',);
    }
    //checking if the user is blocked
    const userStatus = user?.isBlocked;
    if(userStatus){
      throw new AppError(StatusCodes.FORBIDDEN,'User is blocked, please contact admin',);
    }
    //checking if the password is correct
    if(!(await User.isPasswordMatched(payload?.password,user?.password))){
        throw new AppError(StatusCodes.FORBIDDEN,'password is not matched');
    }
    const jwtPayload = {
        userEmail: user?.email,
        role:user?.role,
        userId: user?.id,
        name: user?.name,
    };
    const accessToken = createToken(
        jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expires_in as string
    );
    return {accessToken};
}
const getAllUser = async()=>{
    const users = await User.find({},{password:0});
    if(!users.length){
        throw new AppError(StatusCodes.NOT_FOUND,'No users found');
    }
    return users;
};
const updateUserStatus = async(userEmail:string,isBlocked:boolean)=>{
    const user = await User.findById(userEmail);
    if(!user){
        throw new AppError(StatusCodes.NOT_FOUND,'User not found');
    }
    user.isBlocked = isBlocked;
    await user.save();
    return user;
}
const changePassword = async(
    userData: JwtPayload,
    payload: {oldPassword:string,newPassword:string},
)=>{
    //checking if the user exist
    const user = await User.isUserExistsByEmail(userData.userEmail as string);
    if(!user){
        throw new AppError(StatusCodes.NOT_FOUND,'User does not exist',);
    }
    //checking if the old password is correct
    if(!(await User.isPasswordMatched(payload?.oldPassword,user?.password))){
        throw new AppError(StatusCodes.FORBIDDEN,'Old password is not matched');
    }
    //hashing the new password
    const newHashedPassword = await bcrypt.hash(payload.newPassword,
        Number(config.bcrypt_salt_round)|10);
    console.log("NEW>>>>",newHashedPassword);
    await User.findOneAndUpdate(
        {
            email: userData.userEmail,
            role: userData.role,
        },
        {
            password: newHashedPassword,
            passwordChangedAt: new Date()
        },
    );
    return null;
    
};

export const AuthServices = {
    registerUser,
    loginUser,
    getAllUser,
    updateUserStatus,
    changePassword,
}


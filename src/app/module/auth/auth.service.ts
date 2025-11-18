import { TRegisterUser } from "./auth.interface";
import * as bcrypt from "bcrypt";
import { User } from "./auth.model";
import { StatusCodes } from "http-status-codes";

const registerUser = async(payload: TRegisterUser)=>{
    payload.password = await bcrypt.hash(payload.password,10);
    const result = await User.create(payload);
    return result;

}

const loginUser = async(payload:TRegisterUser)=>{
    //checking if the user exist
    const user = await User.isUserExistsByEmail(payload.email);
    if(!user){
        throw new Error(`Error ${StatusCodes.NOT_FOUND}: User does not exist`);
    }
}
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const sendEmail = require('../../utils/sendEmail'); 

const registerUser = catchAsync(async(req,res)=>{
    
    // User Registration Logic 
    const result = await AuthServices.registerUser(req.body);
    
    // Extract Fields
    const filteredData = {
        _id:result._id,
        name:result.name,
        email:result.email,
    };
    
    // --Welcome Email Logic Start ---
    
    const welcomeSubject = `🎉 Welcome to ChefBuddy, ${filteredData.name}!`;
    
    const welcomeHtml = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Hello ${filteredData.name},</h2>
            <p>Thank you for successfully signing up for CourseMaster!</p>
            <p>We are excited to help you find the best learning strategy and careear tips.</p>
            <p style="margin-top: 20px;">Happy Learning!</p>
            <p>Best Regards,<br>The CourseMaster Team</p>
        </div>
    `;

    sendEmail(filteredData.email, welcomeSubject, welcomeHtml)
        .catch((err: any) => {

            console.error(`Error in async email job for ${filteredData.email}:`, err.message);
        });

    // -- Welcome Email Logic End ---
    
    sendResponse(res,{
        success:true,
        message:'User registered successfully. A welcome email is being sent.',
        statusCode:201,
        data:filteredData
    });
}
);
const loginUser = catchAsync(async(req,res)=>{
    const result = await AuthServices.loginUser(req.body);
    console.log(result);
    const {accessToken} = result;
    sendResponse(res,{
        success:true,
        message:'User logged in successfully',
        statusCode:200,
        data:{accessToken}
    });
});
const getAllUser = catchAsync(async(req,res)=>{
    const result = await AuthServices.getAllUser();
    sendResponse(res,{
        success:true,
        message:'Users retrieved successfully',
        statusCode:200,
        data:result
    });
});
const updateUserStatusController = catchAsync(async(req,res)=>{
      const {id} = req.params;
      const {isBlocked} = req.body;
        const result = await AuthServices.updateUserStatus(id,isBlocked);
        sendResponse(res,{
            success:true,
            message:'User status updated successfully',
            statusCode:200,
            data:result
        });
});
const changePassword = catchAsync(async(req,res)=>{
    const {...passwordData} = req.body;
    const result = await AuthServices.changePassword(req.user ,passwordData);
    sendResponse(res,{
        statusCode:StatusCodes.OK,
        success:true,
        message:"Password changed successfully",
        data:result
    });

});
export const AuthControllers = {
    registerUser,
    loginUser,
    getAllUser,
    updateUserStatusController,
    changePassword,
}
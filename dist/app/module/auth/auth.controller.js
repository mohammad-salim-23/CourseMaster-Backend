"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthControllers = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const auth_service_1 = require("./auth.service");
const sendEmail = require('../../utils/sendEmail');
const registerUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // User Registration Logic 
    const result = yield auth_service_1.AuthServices.registerUser(req.body);
    // Extract Fields
    const filteredData = {
        _id: result._id,
        name: result.name,
        email: result.email,
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
        .catch((err) => {
        console.error(`Error in async email job for ${filteredData.email}:`, err.message);
    });
    // -- Welcome Email Logic End ---
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'User registered successfully. A welcome email is being sent.',
        statusCode: 201,
        data: filteredData
    });
}));
const loginUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthServices.loginUser(req.body);
    console.log(result);
    const { accessToken } = result;
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'User logged in successfully',
        statusCode: 200,
        data: { accessToken }
    });
}));
const getAllUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.AuthServices.getAllUser();
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Users retrieved successfully',
        statusCode: 200,
        data: result
    });
}));
const updateUserStatusController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { isBlocked } = req.body;
    const result = yield auth_service_1.AuthServices.updateUserStatus(id, isBlocked);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'User status updated successfully',
        statusCode: 200,
        data: result
    });
}));
const changePassword = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const passwordData = __rest(req.body, []);
    const result = yield auth_service_1.AuthServices.changePassword(req.user, passwordData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Password changed successfully",
        data: result
    });
}));
exports.AuthControllers = {
    registerUser,
    loginUser,
    getAllUser,
    updateUserStatusController,
    changePassword,
};

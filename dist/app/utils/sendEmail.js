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
const nodemailer = require('nodemailer');
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_SERVICE = process.env.EMAIL_SERVICE || 'gmail';
// 1. Transporter Setup
const transporter = nodemailer.createTransport({
    service: EMAIL_SERVICE,
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    },
    pool: true,
    maxMessages: Infinity,
    maxConnections: 20
});
/**
 * Common function for sending emails
 * @param {string} to - Graahok-er email
 * @param {string} subject - Email subject
 * @param {string} html - Email body (HTML format)
 */
const sendEmail = (to, subject, html) => __awaiter(void 0, void 0, void 0, function* () {
    // Input validation
    if (!to || !subject || !html) {
        console.error("Email utility: Missing recipient, subject, or HTML content.");
        return { success: false, error: "Missing required fields." };
    }
    // Checking if transporter credentials are set
    if (!EMAIL_USER || !EMAIL_PASS) {
        console.error("Email utility: EMAIL_USER or EMAIL_PASS environment variables are not set.");
        return { success: false, error: "Email credentials not configured." };
    }
    try {
        const mailOptions = {
            from: `ChefBuddy Team <${EMAIL_USER}>`, // Sender's display name and email
            to,
            subject,
            html
        };
        const info = yield transporter.sendMail(mailOptions);
        console.log(' Welcome Email Sent: %s', info.messageId);
        return { success: true, messageId: info.messageId };
    }
    catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : String(error);
        console.error(`❌ Error sending email to ${to}:`, errorMessage);
        return { success: false, error: errorMessage };
    }
});
module.exports = sendEmail;

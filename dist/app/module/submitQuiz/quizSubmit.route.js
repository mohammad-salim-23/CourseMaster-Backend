"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizSubmitRoute = void 0;
const express_1 = require("express");
const quizSubmit_controller_1 = require("./quizSubmit.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = (0, express_1.Router)();
// Submit a quiz
router.post('/submit', (0, auth_1.default)("user", "admin"), quizSubmit_controller_1.QuizSubmissionController.submitQuiz);
// Get all submissions of a user
router.get('/user/:userId', quizSubmit_controller_1.QuizSubmissionController.getUserSubmissions);
// Get all submissions for a quiz
router.get('/quiz/:quizId', quizSubmit_controller_1.QuizSubmissionController.getQuizSubmissions);
// Get all quiz submissions (
router.get('/all', (0, auth_1.default)("admin"), quizSubmit_controller_1.QuizSubmissionController.getAllSubmissions);
// Get a specific submission of a user for a quiz
router.get('/user/:userId/quiz/:quizId', quizSubmit_controller_1.QuizSubmissionController.getSubmission);
exports.quizSubmitRoute = router;

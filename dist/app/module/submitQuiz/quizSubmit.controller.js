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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizSubmissionController = void 0;
const quizSubmit_service_1 = require("./quizSubmit.service");
exports.QuizSubmissionController = {
    submitQuiz: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { userId, moduleId, quizId, answers } = req.body;
            const result = yield quizSubmit_service_1.QuizSubmissionService.submitQuiz(userId, moduleId, quizId, answers);
            res.json({ success: true, data: result });
        }
        catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }),
    getUserSubmissions: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield quizSubmit_service_1.QuizSubmissionService.getSubmissionsByUser(req.params.userId);
            res.json({ success: true, data: result });
        }
        catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }),
    getQuizSubmissions: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield quizSubmit_service_1.QuizSubmissionService.getSubmissionsByQuiz(req.params.quizId);
            res.json({ success: true, data: result });
        }
        catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }),
    getSubmission: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield quizSubmit_service_1.QuizSubmissionService.getSubmission(req.params.userId, req.params.quizId);
            res.json({ success: true, data: result });
        }
        catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }),
};

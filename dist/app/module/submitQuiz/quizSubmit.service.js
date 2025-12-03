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
exports.QuizSubmissionService = void 0;
const quiz_model_1 = require("../quiz/quiz.model");
const quizSubmit_model_1 = require("./quizSubmit.model");
exports.QuizSubmissionService = {
    submitQuiz: (userId, moduleId, quizId, answers) => __awaiter(void 0, void 0, void 0, function* () {
        const quiz = yield quiz_model_1.Quiz.findById(quizId);
        if (!quiz)
            throw new Error('Quiz not found');
        // Calculate score
        let score = 0;
        const evaluatedAnswers = answers.map(a => {
            const question = quiz.questions.find(q => q.question === a.question);
            const isCorrect = (question === null || question === void 0 ? void 0 : question.correctAnswer) === a.selectedOption;
            if (isCorrect)
                score += 1;
            return { question: a.question, selectedOption: a.selectedOption, isCorrect };
        });
        const submission = yield quizSubmit_model_1.QuizSubmission.create({
            user: userId,
            module: moduleId,
            quiz: quizId,
            answers: evaluatedAnswers,
            score
        });
        return submission;
    }),
    getSubmissionsByUser: (userId) => __awaiter(void 0, void 0, void 0, function* () { return quizSubmit_model_1.QuizSubmission.find({ user: userId }).populate('module').populate('quiz'); }),
    getSubmissionsByQuiz: (quizId) => __awaiter(void 0, void 0, void 0, function* () { return quizSubmit_model_1.QuizSubmission.find({ quiz: quizId }).populate('user').populate('module'); }),
    getSubmission: (userId, quizId) => __awaiter(void 0, void 0, void 0, function* () { return quizSubmit_model_1.QuizSubmission.findOne({ user: userId, quiz: quizId }).populate('module'); }),
};

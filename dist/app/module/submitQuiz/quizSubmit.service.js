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
    submitQuiz: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const { quizId, moduleId, user, answers } = payload;
        const quiz = yield quiz_model_1.Quiz.findById(quizId);
        console.log(">>>", quiz);
        if (!quiz)
            throw new Error("Quiz not found");
        // Calculate score + include correctAnswer
        let score = 0;
        const evaluatedAnswers = answers.map((a) => {
            const q = quiz.questions.find((qq) => qq.question === a.question);
            const correctIndex = Number(q === null || q === void 0 ? void 0 : q.correctAnswer) - 1;
            const correctAnswer = q === null || q === void 0 ? void 0 : q.options[correctIndex];
            const isCorrect = correctAnswer === a.selectedOption;
            if (isCorrect)
                score += 1;
            return {
                question: a.question,
                selectedOption: a.selectedOption,
                isCorrect,
                correctAnswer,
            };
        });
        // Save submission
        const submission = yield quizSubmit_model_1.QuizSubmission.create({
            user,
            module: moduleId,
            quiz: quizId,
            answers: evaluatedAnswers,
            score,
        });
        return submission;
    }),
    //get all submission
    getAllSubmissions: () => __awaiter(void 0, void 0, void 0, function* () {
        return quizSubmit_model_1.QuizSubmission.find()
            .populate("user")
            .populate("module")
            .populate("quiz");
    }),
    getSubmissionsByUser: (userId) => __awaiter(void 0, void 0, void 0, function* () { return quizSubmit_model_1.QuizSubmission.find({ user: userId }).populate('module').populate('quiz'); }),
    getSubmissionsByQuiz: (quizId) => __awaiter(void 0, void 0, void 0, function* () { return quizSubmit_model_1.QuizSubmission.find({ quiz: quizId }).populate('user').populate('module'); }),
    getSubmission: (userId, quizId) => __awaiter(void 0, void 0, void 0, function* () { return quizSubmit_model_1.QuizSubmission.findOne({ user: userId, quiz: quizId }).populate('module'); }),
};

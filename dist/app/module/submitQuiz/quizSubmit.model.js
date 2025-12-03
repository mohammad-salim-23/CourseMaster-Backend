"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizSubmission = void 0;
const mongoose_1 = require("mongoose");
const quizSubmissionSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Types.ObjectId, ref: 'User', required: true },
    module: { type: mongoose_1.Types.ObjectId, ref: 'Module', required: true },
    quiz: { type: mongoose_1.Types.ObjectId, ref: 'Quiz', required: true },
    answers: [{
            question: { type: String, required: true },
            selectedOption: { type: String, required: true },
            isCorrect: { type: Boolean, required: true }
        }],
    score: { type: Number, default: 0 },
}, { timestamps: true });
exports.QuizSubmission = (0, mongoose_1.model)('QuizSubmission', quizSubmissionSchema);

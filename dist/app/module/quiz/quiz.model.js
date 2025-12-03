"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz = void 0;
const mongoose_1 = require("mongoose");
const questionSchema = new mongoose_1.Schema({
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true },
});
const quizSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    module: { type: mongoose_1.Types.ObjectId, ref: 'Module', required: true },
    questions: [questionSchema],
}, { timestamps: true });
exports.Quiz = (0, mongoose_1.model)('Quiz', quizSchema);

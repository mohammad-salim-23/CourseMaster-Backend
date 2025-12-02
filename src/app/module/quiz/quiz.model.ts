import { model, Schema, Types } from "mongoose";

const questionSchema = new Schema({
question: { type: String, required: true },
options: [{ type: String, required: true }],
correctAnswer: { type: String, required: true },
});

const quizSchema = new Schema({
title: { type: String, required: true },
module: { type: Types.ObjectId, ref: 'Module', required: true },
questions: [questionSchema],
}, { timestamps: true });

export const Quiz = model('Quiz', quizSchema);
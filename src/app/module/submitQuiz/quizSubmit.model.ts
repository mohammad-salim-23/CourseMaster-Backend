import { Schema, model, Types } from 'mongoose';

const quizSubmissionSchema = new Schema({
user: { type: Types.ObjectId, ref: 'User', required: true },
module: { type: Types.ObjectId, ref: 'Module', required: true },
quiz: { type: Types.ObjectId, ref: 'Quiz', required: true },
answers: [{
question: { type: String, required: true },
selectedOption: { type: String, required: true },
isCorrect: { type: Boolean, required: true }
}],
score: { type: Number, default: 0 },
}, { timestamps: true });

export const QuizSubmission = model('QuizSubmission', quizSubmissionSchema);
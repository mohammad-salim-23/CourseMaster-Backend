import { Quiz } from "../quiz/quiz.model";
import { QuizSubmission } from "./quizSubmit.model";


export const QuizSubmissionService = {
submitQuiz: async (userId: string, moduleId: string, quizId: string, answers: any[]) => {
const quiz = await Quiz.findById(quizId);
if (!quiz) throw new Error('Quiz not found');

// Calculate score
let score = 0;
const evaluatedAnswers = answers.map(a => {
const question = quiz.questions.find(q => q.question === a.question);
const isCorrect = question?.correctAnswer === a.selectedOption;
if (isCorrect) score += 1;
return { question: a.question, selectedOption: a.selectedOption, isCorrect };
});

const submission = await QuizSubmission.create({
user: userId,
module: moduleId,
quiz: quizId,
answers: evaluatedAnswers,
score
});

return submission;
},

getSubmissionsByUser: async (userId: string) => QuizSubmission.find({ user: userId }).populate('module').populate('quiz'),
getSubmissionsByQuiz: async (quizId: string) => QuizSubmission.find({ quiz: quizId }).populate('user').populate('module'),
getSubmission: async (userId: string, quizId: string) => QuizSubmission.findOne({ user: userId, quiz: quizId }).populate('module'),
};

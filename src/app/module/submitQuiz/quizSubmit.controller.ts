import { QuizSubmissionService } from "./quizSubmit.service";

export const QuizSubmissionController = {
submitQuiz: async (req: any, res: any) => {
try {
const { userId, moduleId, quizId, answers } = req.body;
const result = await QuizSubmissionService.submitQuiz(userId, moduleId, quizId, answers);
res.json({ success: true, data: result });
} catch (err: any) {
res.status(400).json({ success: false, message: err.message });
}
},

getUserSubmissions: async (req: any, res: any) => {
try {
const result = await QuizSubmissionService.getSubmissionsByUser(req.params.userId);
res.json({ success: true, data: result });
} catch (err: any) {
res.status(400).json({ success: false, message: err.message });
}
},

getQuizSubmissions: async (req: any, res: any) => {
try {
const result = await QuizSubmissionService.getSubmissionsByQuiz(req.params.quizId);
res.json({ success: true, data: result });
} catch (err: any) {
res.status(400).json({ success: false, message: err.message });
}
},

getSubmission: async (req: any, res: any) => {
try {
const result = await QuizSubmissionService.getSubmission(req.params.userId, req.params.quizId);
res.json({ success: true, data: result });
} catch (err: any) {
res.status(400).json({ success: false, message: err.message });
}
},
};


import { Router } from "express";
import { QuizSubmissionController } from "./quizSubmit.controller";
import auth from "../../middleware/auth";

const router = Router();
// Submit a quiz
router.post('/submit',auth("user","admin"), QuizSubmissionController.submitQuiz);

// Get all submissions of a user
router.get('/user/:userId', QuizSubmissionController.getUserSubmissions);

// Get all submissions for a quiz
router.get('/quiz/:quizId', QuizSubmissionController.getQuizSubmissions);

// Get a specific submission of a user for a quiz
router.get('/user/:userId/quiz/:quizId', QuizSubmissionController.getSubmission);
export const quizSubmitRoute = router;
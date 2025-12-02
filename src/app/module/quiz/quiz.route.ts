import { Router } from "express";
import { QuizController } from "./quiz.controller";

const router = Router();

router.post('/', QuizController.create);
router.get('/module/:moduleId', QuizController.getByModule);
router.patch('/:id', QuizController.update);
router.delete('/:id', QuizController.delete);

export const quizRoute = router;
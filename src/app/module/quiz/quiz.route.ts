import { Router } from "express";
import { QuizController } from "./quiz.controller";
import auth from "../../middleware/auth";

const router = Router();

router.post('/',auth("admin"), QuizController.create);
router.get('/module/:moduleId', QuizController.getByModule);
router.patch('/:id',auth("admin"), QuizController.update);
router.delete('/:id',auth("admin"), QuizController.delete);

export const quizRoute = router;
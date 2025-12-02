import { Router } from "express";
import { AssignmentController } from "./assignment.controller";

const router = Router();
router.post('/', AssignmentController.create);
router.get('/module/:moduleId', AssignmentController.getByModule);
router.patch('/:id', AssignmentController.update);
router.delete('/:id', AssignmentController.delete);

export const assignmentRoute = router;
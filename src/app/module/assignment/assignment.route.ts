import { Router } from "express";
import { AssignmentController } from "./assignment.controller";
import auth from "../../middleware/auth";

const router = Router();
router.post('/',auth("admin"), AssignmentController.create);
router.get('/module/:moduleId', AssignmentController.getByModule);
router.patch('/:id',auth("admin"), AssignmentController.update);
router.delete('/:id',auth("admin"), AssignmentController.delete);

export const assignmentRoute = router;
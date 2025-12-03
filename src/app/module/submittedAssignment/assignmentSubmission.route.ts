import { Router } from "express";
import { AssignmentSubmissionController } from "./assignmentSubmission.controller";
import auth from "../../middleware/auth";

const router = Router();

// User submits assignment
router.post("/submit",auth("user","admin"), AssignmentSubmissionController.submit);

// Update marks (admin/instructor)
router.patch("/:id/marks",auth("admin"), AssignmentSubmissionController.updateMarks);

// Get submissions of a user
router.get("/user/:userId", AssignmentSubmissionController.getUserSubmissions);

// Get submissions of a module
router.get("/module/:moduleId", AssignmentSubmissionController.getModuleSubmissions);

// Get a specific submission for a specific assignment
router.get(
  "/user/:userId/assignment/:assignmentId",
  AssignmentSubmissionController.getSingleSubmission
);
export const assignmentSubmissionRoute = router;
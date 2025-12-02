import { Router } from "express";
import { AssignmentSubmissionController } from "./assignmentSubmission.controller";

const router = Router();

// User submits assignment
router.post("/submit", AssignmentSubmissionController.submit);

// Update marks (admin/instructor)
router.put("/:id/marks", AssignmentSubmissionController.updateMarks);

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
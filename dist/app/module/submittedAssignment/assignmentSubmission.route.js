"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignmentSubmissionRoute = void 0;
const express_1 = require("express");
const assignmentSubmission_controller_1 = require("./assignmentSubmission.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = (0, express_1.Router)();
// User submits assignment
router.post("/submit", (0, auth_1.default)("user", "admin"), assignmentSubmission_controller_1.AssignmentSubmissionController.submit);
// Update marks (admin/instructor)
router.patch("/:id/marks", (0, auth_1.default)("admin"), assignmentSubmission_controller_1.AssignmentSubmissionController.updateMarks);
// Get submissions of a user
router.get("/user/:userId", assignmentSubmission_controller_1.AssignmentSubmissionController.getUserSubmissions);
// Get submissions of a module
router.get("/module/:moduleId", assignmentSubmission_controller_1.AssignmentSubmissionController.getModuleSubmissions);
// Get a specific submission for a specific assignment
router.get("/user/:userId/assignment/:assignmentId", assignmentSubmission_controller_1.AssignmentSubmissionController.getSingleSubmission);
//get all assignments submissions
router.get("/", (0, auth_1.default)("admin"), assignmentSubmission_controller_1.AssignmentSubmissionController.getAllSubmissions);
exports.assignmentSubmissionRoute = router;

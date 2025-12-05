"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrollmentRoutes = void 0;
const express_1 = require("express");
const enrollment_controller_1 = require("./enrollment.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = (0, express_1.Router)();
// Enroll user in course with batch
router.post('/', (0, auth_1.default)("user", "admin"), enrollment_controller_1.EnrollmentController.enroll);
// Get all enrollments of user
router.get('/user/:userId', (0, auth_1.default)("user", "admin"), enrollment_controller_1.EnrollmentController.getUserEnrollments);
// Get specific enrollment for a course
router.get('/user/:userId/course/:courseId', (0, auth_1.default)("user", "admin"), enrollment_controller_1.EnrollmentController.getEnrollment);
//all enrollments
router.get('/', (0, auth_1.default)("admin"), enrollment_controller_1.EnrollmentController.getAllEnrollments);
// Mark a module completed
router.post('/complete-module', (0, auth_1.default)("user"), enrollment_controller_1.EnrollmentController.markModuleCompleted);
exports.enrollmentRoutes = router;

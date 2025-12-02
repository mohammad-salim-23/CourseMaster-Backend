import express, { Router } from 'express';
import { EnrollmentController } from './enrollment.controller';

 const router = Router();
// Enroll user in course with batch
router.post('/', EnrollmentController.enroll);

// Get all enrollments of user
router.get('/user/:userId', EnrollmentController.getUserEnrollments);

// Get specific enrollment for a course
router.get('/user/:userId/course/:courseId', EnrollmentController.getEnrollment);

// Mark a module completed
router.post('/complete-module', EnrollmentController.markModuleCompleted);
export const enrollmentRoutes = router;
import express, { Router } from 'express';
import { EnrollmentController } from './enrollment.controller';
import auth from '../../middleware/auth';

 const router = Router();
// Enroll user in course with batch
router.post('/',auth("user","admin"), EnrollmentController.enroll);

// Get all enrollments of user
router.get('/user/:userId',auth("user","admin"), EnrollmentController.getUserEnrollments);

// Get specific enrollment for a course
router.get('/user/:userId/course/:courseId',auth("user","admin"), EnrollmentController.getEnrollment);
//all enrollments
router.get('/',auth("admin"), EnrollmentController.getAllEnrollments);
// Mark a module completed
router.post('/complete-module',auth("user"), EnrollmentController.markModuleCompleted);
export const enrollmentRoutes = router;
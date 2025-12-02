import {Router} from 'express';
import { authRoutes } from '../module/auth/auth.route';
import { courseRoutes } from '../module/course/course.route';
import { moduleRoute } from '../module/course/module/module.route';
import { enrollmentRoutes } from '../module/enrollment/enrollment.route';
import { assignmentRoute } from '../module/assignment/assignment.route';
import { quizRoute } from '../module/quiz/quiz.route';


const router = Router();

const moduleRoutes = [
    {
        path:"/auth",
        route:authRoutes
    },
    {
        path:"/course",
        route:courseRoutes
    },
    {
        path:"/module",
        route:moduleRoute
    },
    {
        path:"/enrollment",
        route:enrollmentRoutes
    },
    {
        path:"/assignment",
        route:assignmentRoute
    },
    {
        path:"/quiz",
        route:quizRoute
    }
];
moduleRoutes.forEach((route)=>router.use(route.path,route.route));
export default router;
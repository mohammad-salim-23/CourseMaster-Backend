import {Router} from 'express';
import { authRoutes } from '../module/auth/auth.route';
import { courseRoutes } from '../module/course/course.route';

const router = Router();

const moduleRoutes = [
    {
        path:"/auth",
        route:authRoutes
    },
    {
        path:"/course",
        route:courseRoutes
    }
];
moduleRoutes.forEach((route)=>router.use(route.path,route.route));
export default router;
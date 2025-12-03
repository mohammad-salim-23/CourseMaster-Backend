import { Router } from 'express';
import { CourseController } from './course.controller';
import auth from '../../middleware/auth';


const router = Router();

router.post('/',auth("admin"), CourseController.create);
router.get('/', CourseController.getAll);
router.get('/:id',auth("user","admin"), CourseController.getOne);
router.patch('/:id',auth("admin"), CourseController.update);
router.delete('/:id',auth("admin"), CourseController.delete);


export const courseRoutes= router;
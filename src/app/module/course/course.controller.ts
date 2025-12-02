import { Request, Response } from 'express';
import { createCourseValidation, updateCourseValidation } from './course.validation';
import { CourseService } from './course.service';



export const CourseController = {
async create(req: Request, res: Response) {
try {
const validatedData = createCourseValidation.parse(req.body);
const result = await CourseService.createCourse(validatedData);
res.status(201).json({ success: true, data: result });
} catch (error: any) {
res.status(400).json({ success: false, message: error.message });
}
},

async getAll(req: Request, res: Response) {
try {
const result = await CourseService.getAllCourses(req.query);
res.status(200).json({ success: true, data: result });
} catch (error: any) {
res.status(500).json({ success: false, message: error.message });
}
},

async getOne(req: Request, res: Response) {
try {
const result = await CourseService.getSingleCourse(req.params.id);
res.status(200).json({ success: true, data: result });
} catch (error: any) {
res.status(404).json({ success: false, message: error.message });
}
},

async update(req: Request, res: Response) {
try {
const validatedData = updateCourseValidation.parse(req.body);
const result = await CourseService.updateCourse(req.params.id, validatedData);
res.status(200).json({ success: true, data: result });
} catch (error: any) {
res.status(400).json({ success: false, message: error.message });
}
},

async delete(req: Request, res: Response) {
try {
const result = await CourseService.deleteCourse(req.params.id);
res.status(200).json({ success: true, data: result });
} catch (error: any) {
res.status(400).json({ success: false, message: error.message });
}
}
};

import { EnrollmentService } from "./enrollment.service";

export const EnrollmentController = {
enroll: async (req: any, res: any) => {
try {
const { userId, courseId, batchId } = req.body;
const result = await EnrollmentService.enrollUser(userId, courseId, batchId);
res.json({ success: true, data: result });
} catch (error: any) {
res.status(400).json({ success: false, message: error.message });
}
},

getUserEnrollments: async (req: any, res: any) => {
try {
const result = await EnrollmentService.getUserEnrollments(req.params.userId);
res.json({ success: true, data: result });
} catch (error: any) {
res.status(400).json({ success: false, message: error.message });
}
},

getEnrollment: async (req: any, res: any) => {
try {
const result = await EnrollmentService.getEnrollment(req.params.userId, req.params.courseId);
res.json({ success: true, data: result });
} catch (error: any) {
res.status(400).json({ success: false, message: error.message });
}
},

markModuleCompleted: async (req: any, res: any) => {
try {
const { userId, courseId, moduleId } = req.body;
const result = await EnrollmentService.markModuleCompleted(userId, courseId, moduleId);
res.json({ success: true, data: result });
} catch (error: any) {
res.status(400).json({ success: false, message: error.message });
}
}
};


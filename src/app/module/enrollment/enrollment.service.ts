import { Module } from "../course/module/module.model";
import { Enrollment } from "./enrollment.model";

export const EnrollmentService = {
enrollUser: async (userId: string, courseId: string, batchId: string) => {
const enrollment = await Enrollment.create({ user: userId, course: courseId, batch: batchId });
return enrollment;
},

getUserEnrollments: async (userId: string) => {
return Enrollment.find({ user: userId }).populate('course').populate('batch');
},
getAllEnrollments: async () => {
return Enrollment.find().populate('user').populate('course').populate('batch');
},
getEnrollment: async (userId: string, courseId: string) => {
return Enrollment.findOne({ user: userId, course: courseId }).populate('completedModules').populate('batch');
},

markModuleCompleted: async (userId: string, courseId: string, moduleId: string) => {
const mongoose = require('mongoose');
const enrollment = await Enrollment.findOne({ user: userId, course: courseId });
if (!enrollment) throw new Error('User is not enrolled in this course');

const moduleObjectId = new mongoose.Types.ObjectId(moduleId);

if (!enrollment.completedModules.some((m: any) => m.equals(moduleObjectId))) {
enrollment.completedModules.push(moduleObjectId);
const totalModules = await Module.countDocuments({ course: courseId });
enrollment.progress = (enrollment.completedModules.length / totalModules) * 100;
await enrollment.save();
}

return enrollment;
}
};
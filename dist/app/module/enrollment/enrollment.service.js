"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentService = void 0;
const module_model_1 = require("../course/module/module.model");
const enrollment_model_1 = require("./enrollment.model");
exports.EnrollmentService = {
    enrollUser: (userId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
        const enrollment = yield enrollment_model_1.Enrollment.create({ user: userId, course: courseId });
        return enrollment;
    }),
    getUserEnrollments: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        return enrollment_model_1.Enrollment.find({ user: userId }).populate('course').populate('batch');
    }),
    getAllEnrollments: () => __awaiter(void 0, void 0, void 0, function* () {
        return enrollment_model_1.Enrollment.find().populate('user').populate('course').populate('batch');
    }),
    getEnrollment: (userId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
        return enrollment_model_1.Enrollment.findOne({ user: userId, course: courseId }).populate('completedModules').populate('batch');
    }),
    markModuleCompleted: (userId, courseId, moduleId) => __awaiter(void 0, void 0, void 0, function* () {
        const mongoose = require('mongoose');
        const enrollment = yield enrollment_model_1.Enrollment.findOne({ user: userId, course: courseId });
        if (!enrollment)
            throw new Error('User is not enrolled in this course');
        const moduleObjectId = new mongoose.Types.ObjectId(moduleId);
        if (!enrollment.completedModules.some((m) => m.equals(moduleObjectId))) {
            enrollment.completedModules.push(moduleObjectId);
            const totalModules = yield module_model_1.Module.countDocuments({ course: courseId });
            enrollment.progress = (enrollment.completedModules.length / totalModules) * 100;
            yield enrollment.save();
        }
        return enrollment;
    })
};

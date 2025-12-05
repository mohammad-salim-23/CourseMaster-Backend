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
exports.ModuleService = void 0;
const assignment_model_1 = require("../../assignment/assignment.model");
const enrollment_model_1 = require("../../enrollment/enrollment.model");
const quiz_model_1 = require("../../quiz/quiz.model");
const quizSubmit_model_1 = require("../../submitQuiz/quizSubmit.model");
const assignmentSubmission_model_1 = require("../../submittedAssignment/assignmentSubmission.model");
const course_model_1 = require("../course.model");
const module_model_1 = require("./module.model");
exports.ModuleService = {
    createModule: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const module = yield module_model_1.Module.create(payload);
        // Push module reference into course
        yield course_model_1.Course.findByIdAndUpdate(module.course, {
            $push: { modules: module._id }
        });
        return module;
    }),
    getModulesByCourse: (courseId) => __awaiter(void 0, void 0, void 0, function* () {
        return module_model_1.Module.find({ course: courseId });
    }),
    getModuleDetails: (moduleId, userId) => __awaiter(void 0, void 0, void 0, function* () {
        const module = yield module_model_1.Module.findById(moduleId).lean();
        if (!module)
            return null;
        const assignments = yield assignment_model_1.Assignment.find({ module: moduleId }).lean();
        const quizzes = yield quiz_model_1.Quiz.find({ module: moduleId }).lean();
        let assignmentSubmitted = false;
        let quizSubmitted = false;
        let completed = false;
        let enrollmentId = null;
        if (userId) {
            const enrollment = yield enrollment_model_1.Enrollment.findOne({ user: userId, course: module.course });
            if (enrollment) {
                enrollmentId = enrollment._id;
                completed = enrollment.completedModules.some((m) => m.equals(moduleId));
            }
            const asub = yield assignmentSubmission_model_1.AssignmentSubmission.findOne({ module: moduleId, user: userId });
            const qsub = yield quizSubmit_model_1.QuizSubmission.findOne({ module: moduleId, user: userId });
            assignmentSubmitted = !!asub;
            quizSubmitted = !!qsub;
        }
        return {
            module,
            assignments,
            quizzes,
            assignmentSubmitted,
            quizSubmitted,
            completed,
            enrollmentId,
            userId
        };
    }),
    updateModule: (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return module_model_1.Module.findByIdAndUpdate(id, payload, { new: true });
    }),
    deleteModule: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const module = yield module_model_1.Module.findById(id);
        if (!module)
            throw new Error("Module not found");
        yield course_model_1.Course.findByIdAndUpdate(module.course, {
            $pull: { modules: module._id }
        });
        return module_model_1.Module.findByIdAndDelete(id);
    })
};

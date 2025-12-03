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
exports.EnrollmentController = void 0;
const enrollment_service_1 = require("./enrollment.service");
exports.EnrollmentController = {
    enroll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { userId, courseId, batchId } = req.body;
            const result = yield enrollment_service_1.EnrollmentService.enrollUser(userId, courseId, batchId);
            res.json({ success: true, data: result });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }),
    getUserEnrollments: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield enrollment_service_1.EnrollmentService.getUserEnrollments(req.params.userId);
            res.json({ success: true, data: result });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }),
    getAllEnrollments: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield enrollment_service_1.EnrollmentService.getAllEnrollments();
            res.json({ success: true, data: result });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error === null || error === void 0 ? void 0 : error.message });
        }
    }),
    getEnrollment: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield enrollment_service_1.EnrollmentService.getEnrollment(req.params.userId, req.params.courseId);
            res.json({ success: true, data: result });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }),
    markModuleCompleted: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { userId, courseId, moduleId } = req.body;
            const result = yield enrollment_service_1.EnrollmentService.markModuleCompleted(userId, courseId, moduleId);
            res.json({ success: true, data: result });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    })
};

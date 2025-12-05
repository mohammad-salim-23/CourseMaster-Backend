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
exports.AssignmentSubmissionController = void 0;
const assignmentSubmission_service_1 = require("./assignmentSubmission.service");
exports.AssignmentSubmissionController = {
    submit: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userId = req.user.userId;
            const payload = {
                user: userId,
                module: req.body.module,
                assignment: req.body.assignment,
                answer: req.body.answer,
            };
            const result = yield assignmentSubmission_service_1.AssignmentSubmissionService.submitAssignment(payload);
            res.json({ success: true, data: result });
        }
        catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }),
    getAllSubmissions: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield assignmentSubmission_service_1.AssignmentSubmissionService.getAllSubmissions();
            res.json({ success: true, data: result });
        }
        catch (e) {
            res.status(400).json({ success: false, message: e.message });
        }
    }),
    updateMarks: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield assignmentSubmission_service_1.AssignmentSubmissionService.updateMarks(req.params.id, req.body.marks);
            res.json({ success: true, data: result });
        }
        catch (e) {
            res.status(400).json({ success: false, message: e.message });
        }
    }),
    getUserSubmissions: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield assignmentSubmission_service_1.AssignmentSubmissionService.getUserSubmissions(req.params.userId);
            res.json({ success: true, data: result });
        }
        catch (e) {
            res.status(400).json({ success: false, message: e.message });
        }
    }),
    getModuleSubmissions: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield assignmentSubmission_service_1.AssignmentSubmissionService.getModuleSubmissions(req.params.moduleId);
            res.json({ success: true, data: result });
        }
        catch (e) {
            res.status(400).json({ success: false, message: e.message });
        }
    }),
    getSingleSubmission: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield assignmentSubmission_service_1.AssignmentSubmissionService.getSingleSubmission(req.params.userId, req.params.assignmentId);
            res.json({ success: true, data: result });
        }
        catch (e) {
            res.status(400).json({ success: false, message: e.message });
        }
    }),
};

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
exports.AssignmentSubmissionService = void 0;
const assignmentSubmission_model_1 = require("./assignmentSubmission.model");
exports.AssignmentSubmissionService = {
    submitAssignment: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        return assignmentSubmission_model_1.AssignmentSubmission.create(payload);
    }),
    updateMarks: (id, marks) => __awaiter(void 0, void 0, void 0, function* () {
        return assignmentSubmission_model_1.AssignmentSubmission.findByIdAndUpdate(id, { marks, status: "reviewed" }, { new: true });
    }),
    getAllSubmissions: () => __awaiter(void 0, void 0, void 0, function* () {
        return assignmentSubmission_model_1.AssignmentSubmission.find()
            .populate("user")
            .populate("module")
            .populate("assignment");
    }),
    getUserSubmissions: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        return assignmentSubmission_model_1.AssignmentSubmission.find({ user: userId })
            .populate("module")
            .populate("assignment");
    }),
    getModuleSubmissions: (moduleId) => __awaiter(void 0, void 0, void 0, function* () {
        return assignmentSubmission_model_1.AssignmentSubmission.find({ module: moduleId })
            .populate("user")
            .populate("assignment");
    }),
    getSingleSubmission: (userId, assignmentId) => __awaiter(void 0, void 0, void 0, function* () {
        return assignmentSubmission_model_1.AssignmentSubmission.findOne({ user: userId, assignment: assignmentId })
            .populate("module")
            .populate("assignment");
    }),
};

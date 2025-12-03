"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentSubmission = void 0;
const mongoose_1 = require("mongoose");
const assignmentSubmissionSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Types.ObjectId, ref: "User", required: true },
    module: { type: mongoose_1.Types.ObjectId, ref: "Module", required: true },
    assignment: { type: mongoose_1.Types.ObjectId, ref: "Assignment", required: true },
    answer: { type: String, required: true }, // text or drive link
    status: { type: String, enum: ["submitted", "reviewed"], default: "submitted" },
    marks: { type: Number, default: null },
}, { timestamps: true });
exports.AssignmentSubmission = (0, mongoose_1.model)("AssignmentSubmission", assignmentSubmissionSchema);

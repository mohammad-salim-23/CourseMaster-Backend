"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assignment = void 0;
const mongoose_1 = require("mongoose");
const assignmentSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    module: { type: mongoose_1.Types.ObjectId, ref: 'Module', required: true },
    description: { type: String },
    submissionType: { type: String, enum: ['text', 'link'], default: 'text' },
}, { timestamps: true });
exports.Assignment = (0, mongoose_1.model)('Assignment', assignmentSchema);

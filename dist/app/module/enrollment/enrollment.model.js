"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enrollment = void 0;
const mongoose_1 = require("mongoose");
const enrollmentSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Types.ObjectId, ref: 'User', required: true },
    course: { type: mongoose_1.Types.ObjectId, ref: 'Course', required: true },
    batch: { type: mongoose_1.Types.ObjectId, ref: 'Course.batches', required: true }, // <-- add batch reference
    completedModules: [{ type: mongoose_1.Types.ObjectId, ref: 'Module' }],
    progress: { type: Number, default: 0 },
}, { timestamps: true });
exports.Enrollment = (0, mongoose_1.model)('Enrollment', enrollmentSchema);

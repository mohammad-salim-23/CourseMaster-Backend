"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
const mongoose_1 = require("mongoose");
const course_model_1 = require("../course.model");
const moduleSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    // every module belongs to 1 course
    course: { type: mongoose_1.Types.ObjectId, ref: "Course", required: true },
    lessons: [course_model_1.lessonSchema],
}, { timestamps: true });
exports.Module = (0, mongoose_1.model)("Module", moduleSchema);

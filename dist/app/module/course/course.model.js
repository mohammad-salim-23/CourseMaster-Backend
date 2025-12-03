"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = exports.lessonSchema = void 0;
const mongoose_1 = require("mongoose");
exports.lessonSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    videoUrl: { type: String, required: true },
    isFreePreview: { type: Boolean, default: false },
});
const batchSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
});
const courseSchema = new mongoose_1.Schema({
    title: { type: String, required: true, index: "text" },
    description: { type: String, required: true },
    instructor: { type: String, required: true, index: true },
    price: { type: Number, required: true, index: true },
    category: { type: String, index: true },
    tags: [{ type: String, index: true }],
    // Modules are now separate model → store references
    modules: [{ type: mongoose_1.Types.ObjectId, ref: "Module" }],
    batches: [batchSchema],
    createdBy: { type: mongoose_1.Types.ObjectId, ref: "User" },
}, { timestamps: true });
courseSchema.index({ title: "text", description: "text" });
exports.Course = (0, mongoose_1.model)("Course", courseSchema);

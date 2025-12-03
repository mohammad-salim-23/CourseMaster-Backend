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
courseSchema.statics.getPopularCourses = function (limit, lastSeenDate) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = {};
        if (lastSeenDate)
            query.createdAt = { $lt: lastSeenDate };
        // Sort by createdAt (latest first)
        return this.find(query)
            .sort({ createdAt: -1 })
            .limit(limit)
            .lean();
    });
};
exports.Course = (0, mongoose_1.model)("Course", courseSchema);

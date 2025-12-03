"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCourseValidation = exports.createCourseValidation = exports.batchValidation = exports.lessonValidation = void 0;
const zod_1 = require("zod");
exports.lessonValidation = zod_1.z.object({
    title: zod_1.z.string(),
    videoUrl: zod_1.z.string(),
    isFreePreview: zod_1.z.boolean().optional()
});
exports.batchValidation = zod_1.z.object({
    name: zod_1.z.string(),
    startDate: zod_1.z.string().or(zod_1.z.date())
});
exports.createCourseValidation = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    instructor: zod_1.z.string(),
    price: zod_1.z.number(),
    category: zod_1.z.string().optional(),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
    batches: zod_1.z.array(exports.batchValidation).optional(),
});
exports.updateCourseValidation = exports.createCourseValidation.partial();

import { Schema, model, Types } from "mongoose";

export const lessonSchema = new Schema({
title: { type: String, required: true },
videoUrl: { type: String, required: true },
isFreePreview: { type: Boolean, default: false },
});

const batchSchema = new Schema({
name: { type: String, required: true },
startDate: { type: Date, required: true },
});

const courseSchema = new Schema({
title: { type: String, required: true, index: "text" },
description: { type: String, required: true },
instructor: { type: String, required: true, index: true },
price: { type: Number, required: true, index: true },
category: { type: String, index: true },
tags: [{ type: String, index: true }],

// Modules are now separate model → store references
modules: [{ type: Types.ObjectId, ref: "Module" }],

batches: [batchSchema],

createdBy: { type: Types.ObjectId, ref: "User" },
}, { timestamps: true });

courseSchema.index({ title: "text", description: "text" });
courseSchema.statics.getPopularCourses = async function(limit: number, lastSeenDate?: Date) {
    const query: any = {};
    if (lastSeenDate) query.createdAt = { $lt: lastSeenDate }; 
    
    // Sort by createdAt (latest first)
    return this.find(query)
               .sort({ createdAt: -1 }) 
               .limit(limit)
             
               .lean();
};
export const Course = model("Course", courseSchema);
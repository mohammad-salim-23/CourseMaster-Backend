import { model, Schema, Types } from "mongoose";
import { lessonSchema } from "../course.model";

const moduleSchema = new Schema({
title: { type: String, required: true },

course: { type: Types.ObjectId, ref: "Course", required: true },

lessons: [lessonSchema],
}, { timestamps: true });

export const Module = model("Module", moduleSchema);
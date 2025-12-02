import { Schema, model, Types } from 'mongoose';

const assignmentSchema = new Schema({
title: { type: String, required: true },
module: { type: Types.ObjectId, ref: 'Module', required: true },
description: { type: String },
submissionType: { type: String, enum: ['text', 'link'], default: 'text' },
}, { timestamps: true });

export const Assignment = model('Assignment', assignmentSchema);
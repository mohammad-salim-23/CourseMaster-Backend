import { Schema, model, Types } from 'mongoose';

const enrollmentSchema = new Schema({
  user: { type: Types.ObjectId, ref: 'User', required: true },
  course: { type: Types.ObjectId, ref: 'Course', required: true },
  batch: { type: Types.ObjectId, ref: 'Course.batches', required: true }, // <-- add batch reference
  completedModules: [{ type: Types.ObjectId, ref: 'Module' }],
  progress: { type: Number, default: 0 },
}, { timestamps: true });

export const Enrollment = model('Enrollment', enrollmentSchema);

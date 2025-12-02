import { Schema, model, Types } from "mongoose";

const progressSchema = new Schema({
  moduleId: { type: Types.ObjectId },
  lessonId: { type: Types.ObjectId },
  isCompleted: { type: Boolean, default: false }
});

const enrollmentSchema = new Schema({
  student: { type: Types.ObjectId, ref: "User", required: true },
  course: { type: Types.ObjectId, ref: "Course", required: true },
  batch: { type: Types.ObjectId },

  progress: [progressSchema],

  enrolledAt: { type: Date, default: Date.now }
}, { timestamps: true });

export const Enrollment = model("Enrollment", enrollmentSchema);

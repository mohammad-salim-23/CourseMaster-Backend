import { Schema, model, Types } from "mongoose";

const assignmentSubmissionSchema = new Schema({
  user: { type: Types.ObjectId, ref: "User", required: true },
  module: { type: Types.ObjectId, ref: "Module", required: true },
  assignment: { type: Types.ObjectId, ref: "Assignment", required: true },

  answer: { type: String, required: true }, 
  status: { type: String, enum: ["submitted", "reviewed"], default: "submitted" },
  marks: { type: Number, default: null },

}, { timestamps: true });

export const AssignmentSubmission = model(
  "AssignmentSubmission",
  assignmentSubmissionSchema
);

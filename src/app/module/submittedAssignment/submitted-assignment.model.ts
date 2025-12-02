import { Schema, model, Types } from "mongoose";
const submittedAssignmentSchema = new Schema({
  assignment: { type: Types.ObjectId, ref: "Assignment" },
  course: { type: Types.ObjectId, ref: "Course" },
  module: { type: Types.ObjectId },
  student: { type: Types.ObjectId, ref: "User" },

  answerLink: String,   
  textAnswer: String,

  submittedAt: { type: Date, default: Date.now }
});

export const SubmittedAssignment = model("SubmittedAssignment", submittedAssignmentSchema);

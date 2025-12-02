import { Schema, model, Types } from "mongoose";
const assignmentSchema = new Schema({
  course: { type: Types.ObjectId, ref: "Course" },
  module: { type: Types.ObjectId },
  title: String,
  description: String,
});
export const Assignment = model("Assignment", assignmentSchema);

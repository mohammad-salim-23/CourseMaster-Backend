import { Schema, model, Types } from "mongoose";

const lessonSchema = new Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  isFreePreview: { type: Boolean, default: false }
});

const moduleSchema = new Schema({
  title: { type: String, required: true },
  lessons: [lessonSchema],
});

const batchSchema = new Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: true }
});

const courseSchema = new Schema({
  title: { type: String, required: true, index: 'text' },
  description: { type: String, required: true },
  instructor: { type: String, required: true, index: true },
  price: { type: Number, required: true, index: true },
  category: { type: String, index: true },
  tags: [{ type: String, index: true }],

  modules: [moduleSchema],

  batches: [batchSchema],

  createdBy: { type: Types.ObjectId, ref: "User" },
}, { timestamps: true });

courseSchema.index({ title: "text", description: "text" });

export const Course = model("Course", courseSchema);

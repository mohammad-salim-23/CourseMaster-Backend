import { AssignmentSubmission } from "./assignmentSubmission.model";

export const AssignmentSubmissionService = {
  submitAssignment: async (payload: any) => {
    return AssignmentSubmission.create(payload);
  },

  updateMarks: async (id: string, marks: number) => {
    return AssignmentSubmission.findByIdAndUpdate(
      id,
      { marks, status: "reviewed" },
      { new: true }
    );
  },

  getUserSubmissions: async (userId: string) => {
    return AssignmentSubmission.find({ user: userId })
      .populate("module")
      .populate("assignment");
  },

  getModuleSubmissions: async (moduleId: string) => {
    return AssignmentSubmission.find({ module: moduleId })
      .populate("user")
      .populate("assignment");
  },

  getSingleSubmission: async (userId: string, assignmentId: string) => {
    return AssignmentSubmission.findOne({ user: userId, assignment: assignmentId })
      .populate("module")
      .populate("assignment");
  },
};

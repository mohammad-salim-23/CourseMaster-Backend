import { AssignmentSubmissionService } from "./assignmentSubmission.service";

export const AssignmentSubmissionController = {
  submit: async (req: any, res: any) => {
    try {
      const result = await AssignmentSubmissionService.submitAssignment(req.body);
      res.json({ success: true, data: result });
    } catch (e: any) {
      res.status(400).json({ success: false, message: e.message });
    }
  },

  updateMarks: async (req: any, res: any) => {
    try {
      const result = await AssignmentSubmissionService.updateMarks(
        req.params.id,
        req.body.marks
      );
      res.json({ success: true, data: result });
    } catch (e: any) {
      res.status(400).json({ success: false, message: e.message });
    }
  },

  getUserSubmissions: async (req: any, res: any) => {
    try {
      const result = await AssignmentSubmissionService.getUserSubmissions(
        req.params.userId
      );
      res.json({ success: true, data: result });
    } catch (e: any) {
      res.status(400).json({ success: false, message: e.message });
    }
  },

  getModuleSubmissions: async (req: any, res: any) => {
    try {
      const result = await AssignmentSubmissionService.getModuleSubmissions(
        req.params.moduleId
      );
      res.json({ success: true, data: result });
    } catch (e: any) {
      res.status(400).json({ success: false, message: e.message });
    }
  },

  getSingleSubmission: async (req: any, res: any) => {
    try {
      const result = await AssignmentSubmissionService.getSingleSubmission(
        req.params.userId,
        req.params.assignmentId
      );
      res.json({ success: true, data: result });
    } catch (e: any) {
      res.status(400).json({ success: false, message: e.message });
    }
  },
};

import { Assignment } from "../../assignment/assignment.model";
import { Quiz } from "../../quiz/quiz.model";
import { QuizSubmission } from "../../submitQuiz/quizSubmit.model";
import { AssignmentSubmission } from "../../submittedAssignment/assignmentSubmission.model";
import { Course } from "../course.model";
import { Module } from "./module.model";

export const ModuleService = {
createModule: async (payload: any) => {
const module = await Module.create(payload);

// Push module reference into course
await Course.findByIdAndUpdate(module.course, {
$push: { modules: module._id }
});

return module;
},

getModulesByCourse: async (courseId: string) => {
return Module.find({ course: courseId });
},
getModuleDetails:async(moduleId: string, userId?: string)=> {
    // get module + lessons 
    const module = await Module.findById(moduleId).lean();
    if (!module) return null;

    // get assignments & quizzes for this module
    const assignments = await Assignment.find({ module: moduleId }).lean();
    const quizzes = await Quiz.find({ module: moduleId }).lean();

    // default flags
    let assignmentSubmitted = false;
    let quizSubmitted = false;

    if (userId) {
      const asub = await AssignmentSubmission.findOne({ module: moduleId, user: userId });
      const qsub = await QuizSubmission.findOne({ module: moduleId, user: userId });
      assignmentSubmitted = !!asub;
      quizSubmitted = !!qsub;
    }

    return { module, assignments, quizzes, assignmentSubmitted, quizSubmitted };
  }
,
updateModule: async (id: string, payload: any) => {
return Module.findByIdAndUpdate(id, payload, { new: true });
},

deleteModule: async (id: string) => {
const module = await Module.findById(id);
if (!module) throw new Error("Module not found");

await Course.findByIdAndUpdate(module.course, {
$pull: { modules: module._id }
});

return Module.findByIdAndDelete(id);
}
};

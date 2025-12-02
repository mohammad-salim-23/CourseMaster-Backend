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
},
};
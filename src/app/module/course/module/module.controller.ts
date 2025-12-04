import sendResponse from "../../../utils/sendResponse";
import { ModuleService } from "./module.service";

export const ModuleController = {
create: async (req: any, res: any) => {
try {
const result = await ModuleService.createModule(req.body);
res.json({ success: true, data: result });
} catch (error: any) {
res.status(400).json({ success: false, message: error.message });
}
},

getByCourse: async (req: any, res: any) => {
try {
const result = await ModuleService.getModulesByCourse(req.params.courseId);
res.json({ success: true, data: result });
} catch (error: any) {
res.status(400).json({ success: false, message: error.message });
}
},
getModuleDetails:async(req:any,res:any)=>{
const userId = req.user?.userId || req.user?.id || null;
  const moduleId = req.params.id;

  const result = await ModuleService.getModuleDetails(moduleId, userId);
  if (!result) return sendResponse(res, { success: false, message: "Module not found", statusCode: 404 });
  sendResponse(res, { success: true, message: "Module details", statusCode: 200, data: result });
},
update: async (req: any, res: any) => {
try {
const result = await ModuleService.updateModule(req.params.id, req.body);
res.json({ success: true, data: result });
} catch (error: any) {
res.status(400).json({ success: false, message: error.message });
}
},

delete: async (req: any, res: any) => {
try {
const result = await ModuleService.deleteModule(req.params.id);
res.json({ success: true, data: result });
} catch (error: any) {
res.status(400).json({ success: false, message: error.message });
}
},
};

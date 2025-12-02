import { QuizService } from "./quiz.service";

export const QuizController = {
create: async (req: any, res: any) => {
try {
const result = await QuizService.create(req.body);
res.json({ success: true, data: result });
} catch (err: any) {
res.status(400).json({ success: false, message: err.message });
}
},

getByModule: async (req: any, res: any) => {
try {
const result = await QuizService.getByModule(req.params.moduleId);
res.json({ success: true, data: result });
} catch (err: any) {
res.status(400).json({ success: false, message: err.message });
}
},

update: async (req: any, res: any) => {
try {
const result = await QuizService.update(req.params.id, req.body);
res.json({ success: true, data: result });
} catch (err: any) {
res.status(400).json({ success: false, message: err.message });
}
},

delete: async (req: any, res: any) => {
try {
const result = await QuizService.delete(req.params.id);
res.json({ success: true, data: result });
} catch (err: any) {
res.status(400).json({ success: false, message: err.message });
}
},
};

import { Quiz } from "./quiz.model";


export const QuizService = {
create: async (payload: any) => Quiz.create(payload),
getByModule: async (moduleId: string) => Quiz.find({ module: moduleId }),
update: async (id: string, payload: any) => Quiz.findByIdAndUpdate(id, payload, { new: true }),
delete: async (id: string) => Quiz.findByIdAndDelete(id),
};
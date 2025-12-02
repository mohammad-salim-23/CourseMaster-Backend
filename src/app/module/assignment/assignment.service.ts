import { Assignment } from "./assignment.model";

export const AssignmentService = {
create: async (payload: any) => Assignment.create(payload),
getByModule: async (moduleId: string) => Assignment.find({ module: moduleId }),
update: async (id: string, payload: any) => Assignment.findByIdAndUpdate(id, payload, { new: true }),
delete: async (id: string) => Assignment.findByIdAndDelete(id),
};

import { Course } from "./course.model";


export const CourseService = {
async createCourse(data: any) {
return await Course.create(data);
},

async getAllCourses(query: any) {
const filters: any = {};

if (query.search) {
filters.$text = { $search: query.search };
}

if (query.category) filters.category = query.category;
if (query.instructor) filters.instructor = query.instructor;

return await Course.find(filters);
},

async getSingleCourse(id: string) {
return await Course.findById(id);
},

async updateCourse(id: string, data: any) {
return await Course.findByIdAndUpdate(id, data, { new: true });
},

async deleteCourse(id: string) {
return await Course.findByIdAndDelete(id);
}
};

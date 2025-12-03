import { Course } from "./course.model";

interface CourseQuery {
    search?: string;
    category?: string;
    instructor?: string;
   
    lastSeenDate?: string; 
   
}

export const CourseService = {
async createCourse(data: any) {
return await Course.create(data);
},

async getAllCourses(query: CourseQuery) {
        const filters: any = {};
      
        const limit = 10; 
        
        // Basic Filters ---
        if (query.search) {
            filters.$text = { $search: query.search };
        }
        if (query.category) filters.category = query.category;
        if (query.instructor) filters.instructor = query.instructor;


        // Pagination Logic 
      
        if (query.lastSeenDate) {
            filters.createdAt = { $lt: new Date(query.lastSeenDate) };
        }
        

        return await Course.find(filters)
            .sort({ createdAt: -1 }) 
            .limit(limit)
            .lean();
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

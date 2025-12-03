"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const course_model_1 = require("./course.model");
exports.CourseService = {
    createCourse(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield course_model_1.Course.create(data);
        });
    },
    getAllCourses(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const filters = {};
            if (query.search) {
                filters.$text = { $search: query.search };
            }
            if (query.category)
                filters.category = query.category;
            if (query.instructor)
                filters.instructor = query.instructor;
            return yield course_model_1.Course.find(filters);
        });
    },
    getSingleCourse(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield course_model_1.Course.findById(id);
        });
    },
    updateCourse(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield course_model_1.Course.findByIdAndUpdate(id, data, { new: true });
        });
    },
    deleteCourse(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield course_model_1.Course.findByIdAndDelete(id);
        });
    }
};

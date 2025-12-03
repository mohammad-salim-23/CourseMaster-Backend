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
exports.CourseController = void 0;
const course_validation_1 = require("./course.validation");
const course_service_1 = require("./course.service");
exports.CourseController = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validatedData = course_validation_1.createCourseValidation.parse(req.body);
                const result = yield course_service_1.CourseService.createCourse(validatedData);
                res.status(201).json({ success: true, data: result });
            }
            catch (error) {
                res.status(400).json({ success: false, message: error.message });
            }
        });
    },
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield course_service_1.CourseService.getAllCourses(req.query);
                res.status(200).json({ success: true, data: result });
            }
            catch (error) {
                res.status(500).json({ success: false, message: error.message });
            }
        });
    },
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield course_service_1.CourseService.getSingleCourse(req.params.id);
                res.status(200).json({ success: true, data: result });
            }
            catch (error) {
                res.status(404).json({ success: false, message: error.message });
            }
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validatedData = course_validation_1.updateCourseValidation.parse(req.body);
                const result = yield course_service_1.CourseService.updateCourse(req.params.id, validatedData);
                res.status(200).json({ success: true, data: result });
            }
            catch (error) {
                res.status(400).json({ success: false, message: error.message });
            }
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield course_service_1.CourseService.deleteCourse(req.params.id);
                res.status(200).json({ success: true, data: result });
            }
            catch (error) {
                res.status(400).json({ success: false, message: error.message });
            }
        });
    }
};

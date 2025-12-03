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
exports.ModuleService = void 0;
const course_model_1 = require("../course.model");
const module_model_1 = require("./module.model");
exports.ModuleService = {
    createModule: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const module = yield module_model_1.Module.create(payload);
        // Push module reference into course
        yield course_model_1.Course.findByIdAndUpdate(module.course, {
            $push: { modules: module._id }
        });
        return module;
    }),
    getModulesByCourse: (courseId) => __awaiter(void 0, void 0, void 0, function* () {
        return module_model_1.Module.find({ course: courseId });
    }),
    updateModule: (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return module_model_1.Module.findByIdAndUpdate(id, payload, { new: true });
    }),
    deleteModule: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const module = yield module_model_1.Module.findById(id);
        if (!module)
            throw new Error("Module not found");
        yield course_model_1.Course.findByIdAndUpdate(module.course, {
            $pull: { modules: module._id }
        });
        return module_model_1.Module.findByIdAndDelete(id);
    }),
};

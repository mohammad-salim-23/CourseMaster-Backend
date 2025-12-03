"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRoutes = void 0;
const express_1 = require("express");
const course_controller_1 = require("./course.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = (0, express_1.Router)();
router.post('/', (0, auth_1.default)("admin"), course_controller_1.CourseController.create);
router.get('/', course_controller_1.CourseController.getAll);
router.get('/:id', (0, auth_1.default)("user", "admin"), course_controller_1.CourseController.getOne);
router.patch('/:id', (0, auth_1.default)("admin"), course_controller_1.CourseController.update);
router.delete('/:id', (0, auth_1.default)("admin"), course_controller_1.CourseController.delete);
exports.courseRoutes = router;

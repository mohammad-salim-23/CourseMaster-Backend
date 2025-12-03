"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizRoute = void 0;
const express_1 = require("express");
const quiz_controller_1 = require("./quiz.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = (0, express_1.Router)();
router.post('/', (0, auth_1.default)("admin"), quiz_controller_1.QuizController.create);
router.get('/module/:moduleId', quiz_controller_1.QuizController.getByModule);
router.patch('/:id', (0, auth_1.default)("admin"), quiz_controller_1.QuizController.update);
router.delete('/:id', (0, auth_1.default)("admin"), quiz_controller_1.QuizController.delete);
exports.quizRoute = router;

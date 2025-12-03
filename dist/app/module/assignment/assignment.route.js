"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignmentRoute = void 0;
const express_1 = require("express");
const assignment_controller_1 = require("./assignment.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = (0, express_1.Router)();
router.post('/', (0, auth_1.default)("admin"), assignment_controller_1.AssignmentController.create);
router.get('/module/:moduleId', assignment_controller_1.AssignmentController.getByModule);
router.patch('/:id', (0, auth_1.default)("admin"), assignment_controller_1.AssignmentController.update);
router.delete('/:id', (0, auth_1.default)("admin"), assignment_controller_1.AssignmentController.delete);
exports.assignmentRoute = router;

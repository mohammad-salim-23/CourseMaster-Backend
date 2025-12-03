"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleRoute = void 0;
const express_1 = require("express");
const module_controller_1 = require("./module.controller");
const auth_1 = __importDefault(require("../../../middleware/auth"));
const router = (0, express_1.Router)();
router.post("/", (0, auth_1.default)("admin"), module_controller_1.ModuleController.create);
router.get("/course/:courseId", module_controller_1.ModuleController.getByCourse);
router.patch("/:id", (0, auth_1.default)("admin"), module_controller_1.ModuleController.update);
router.delete("/:id", (0, auth_1.default)("admin"), module_controller_1.ModuleController.delete);
exports.moduleRoute = router;

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
exports.AssignmentService = void 0;
const assignment_model_1 = require("./assignment.model");
exports.AssignmentService = {
    create: (payload) => __awaiter(void 0, void 0, void 0, function* () { return assignment_model_1.Assignment.create(payload); }),
    getByModule: (moduleId) => __awaiter(void 0, void 0, void 0, function* () { return assignment_model_1.Assignment.find({ module: moduleId }); }),
    update: (id, payload) => __awaiter(void 0, void 0, void 0, function* () { return assignment_model_1.Assignment.findByIdAndUpdate(id, payload, { new: true }); }),
    delete: (id) => __awaiter(void 0, void 0, void 0, function* () { return assignment_model_1.Assignment.findByIdAndDelete(id); }),
};

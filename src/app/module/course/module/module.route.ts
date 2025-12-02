import express, { Router } from "express";
import { ModuleController } from "./module.controller";
import auth from "../../../middleware/auth";

const router = Router();

router.post("/", auth("admin"),ModuleController.create);
router.get("/course/:courseId", ModuleController.getByCourse);
router.patch("/:id", ModuleController.update);
router.delete("/:id", ModuleController.delete);
import express, { Router } from "express";
import { ModuleController } from "./module.controller";
import auth from "../../../middleware/auth";

const router = Router();

router.post("/", auth("admin"),ModuleController.create);
router.get("/course/:courseId", ModuleController.getByCourse);
router.patch("/:id",auth("admin"), ModuleController.update);
router.delete("/:id",auth("admin"), ModuleController.delete);

export const moduleRoute = router;
import  { Router } from "express";
import { ModuleController } from "./module.controller";
import auth from "../../../middleware/auth";

const router = Router();

router.post("/", auth("admin"),ModuleController.create);
router.get("/course/:courseId", ModuleController.getByCourse);
router.patch("/:id",auth("admin"), ModuleController.update);
router.delete("/:id",auth("admin"), ModuleController.delete);
router.get("/:id/details", auth("user","admin"), ModuleController.getModuleDetails); 
export const moduleRoute = router;
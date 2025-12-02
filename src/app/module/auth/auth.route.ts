import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { AuthValidation } from "./auth.validation";
import { AuthControllers } from "./auth.controller";
import auth from "../../middleware/auth";

const router = Router();

router.post('/login',
    validateRequest(AuthValidation.loginValidationSchema),
    AuthControllers.loginUser
);
router.post(
  '/register',
  
  AuthControllers.registerUser,
);
router.get('/users',
  auth("admin"),
  AuthControllers.getAllUser
)
router.patch('/users/:id',
  AuthControllers.updateUserStatusController
)
router.post('/change-password',
  auth("admin","user"),
  validateRequest(AuthValidation.changePasswordValidationSchema),
  AuthControllers.changePassword
)
export const authRoutes = router;
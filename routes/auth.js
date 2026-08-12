import express from "express";
import { signupUser, loginUser } from "../controllers/authController.js";
import {
    validateSignup,
    validateLogin,
    handleValidationErrors,
} from "../middleware/validate.js";

const router = express.Router();

router.post(
    "/signup",
    validateSignup,
    handleValidationErrors,
    signupUser
);

router.post(
    "/login",
    validateLogin,
    handleValidationErrors,
    loginUser
);

export default router;
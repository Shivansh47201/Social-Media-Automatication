import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import upload from "../middlewares/avatar.middleware.js";
import userValidation from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", upload.single("avatar"),userValidation, register);
router.post("/login", login);

export default router;

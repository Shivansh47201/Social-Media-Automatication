import express from "express";

import {getProfile, userUpdateProfile} from '../controllers/user.controller.js'
import userValidation from '../middlewares/user.middlewares.js'
import upload from "../middlewares/avatar.middleware.js";


const router = express.Router();

router.get("/profile", userValidation, getProfile)
router.put("/profile/update", userValidation, upload.single("avatar"), userUpdateProfile);

export default router;

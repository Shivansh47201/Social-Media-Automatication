import express from "express";

import {getProfile, userUpdateProfile} from '../controllers/user.controller.js'
import userValidation from '../middlewares/user.middlewares.js'

const router = express.Router();

router.get("/profile", userValidation, getProfile)
router.put("/profile/update", userUpdateProfile)

export default router;

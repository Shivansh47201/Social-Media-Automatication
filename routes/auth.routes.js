import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import upload from "../middlewares/avatar.middleware.js";

const router = express.Router();

router.post("/register", upload.single("avatar"), register);
router.post("/login", login);

// router.post("/uploads", upload.single("avatar"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).send("No file uploaded.");
//   }
//   res.send(
//     `File uploaded: <a href="/uploads/${req.file.filename}">${req.file.filename}</a>`
//   );
// });

// router.get("/upload", (req, res) => {
//   res.render("uploadFile");
// });

export default router;

import express from "express";
import { createAdmin, loginAdmin, getAdminProfile } from "../Controllers/Admin.Controller.js";
import { verifyToken } from "../Middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", createAdmin);
router.post("/login", loginAdmin);
router.get("/profile", verifyToken, getAdminProfile);

export default router;

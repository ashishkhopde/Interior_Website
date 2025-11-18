import { Router } from "express";
import {
  getAllProjects,
  createProjects,
  getProjectById,
  deleteProjectById,
  updateProjectById,
  getTotalProjects
} from "../Controllers/Project.Controller.js";
import { upload } from "../Middleware/multer.middleware.js";
import { verifyToken } from "../Middleware/auth.middleware.js"; // ✅ import middleware

const router = Router();

// Public routes
router.get("/", getAllProjects);
router.get("/total", getTotalProjects);
router.get("/:id", getProjectById);

// Protected routes (admin only)
router.post(
  "/",
  verifyToken, // ✅ verify login before creating
  upload.fields([{ name: "projectImages", maxCount: 1 }]),
  createProjects
);

router.put(
  "/:id",
  verifyToken, // ✅ verify login before updating
  upload.fields([{ name: "projectImages", maxCount: 1 }]),
  updateProjectById
);

router.delete(
  "/:id",
  verifyToken, // ✅ verify login before deleting
  deleteProjectById
);

export default router;

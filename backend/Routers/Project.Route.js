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
import { verifyToken } from "../Middleware/auth.middleware.js"; 

const router = Router();

// Public routes
router.get("/", getAllProjects);
router.get("/total", getTotalProjects);
router.get("/:id", getProjectById);

// Protected routes (admin only)
router.post(
  "/",
  verifyToken, 
  upload.fields([{ name: "projectImages", maxCount: 1 }]),
  createProjects
);

router.put(
  "/:id",
  verifyToken, 
  upload.fields([{ name: "projectImages", maxCount: 1 }]),
  updateProjectById
);

router.delete(
  "/:id",
  verifyToken,
  deleteProjectById
);

export default router;

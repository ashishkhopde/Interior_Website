import { Router } from "express";
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  getTotalBlogs
} from "../Controllers/Blog.Controller.js";
import { upload } from "../Middleware/multer.middleware.js";
import { verifyToken } from "../Middleware/auth.middleware.js"; // ✅ import middleware

const router = Router();

// 🟢 Public routes (no token required)
router.get("/", getAllBlogs);
router.get("/total", getTotalBlogs);
router.get("/:id", getBlogById);

// 🔐 Protected routes (admin only)
router.post(
  "/",
  verifyToken, // ✅ verify JWT before creating
  upload.fields([{ name: "blogImage", maxCount: 1 }]),
  createBlog
);

router.put(
  "/:id",
  verifyToken, // ✅ verify JWT before updating
  upload.fields([{ name: "blogImage", maxCount: 1 }]),
  updateBlog
);

router.delete(
  "/:id",
  verifyToken, // ✅ verify JWT before deleting
  deleteBlog
);

export default router;

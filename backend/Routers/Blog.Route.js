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
import { verifyToken } from "../Middleware/auth.middleware.js"; 

const router = Router();

// Public routes (no token required)
router.get("/", getAllBlogs);
router.get("/total", getTotalBlogs);
router.get("/:id", getBlogById);

// Protected routes (admin only)
router.post(
  "/",
  verifyToken, 
  upload.fields([{ name: "blogImage", maxCount: 1 }]),
  createBlog
);

router.put(
  "/:id",
  verifyToken, 
  upload.fields([{ name: "blogImage", maxCount: 1 }]),
  updateBlog
);

router.delete(
  "/:id",
  verifyToken, 
  deleteBlog
);

export default router;

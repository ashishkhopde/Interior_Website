import { Router } from "express";
import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog, getTotalBlogs } from "../Controllers/Blog.Controller.js";

const router = Router();

router.get("/", getAllBlogs);
router.get("/total", getTotalBlogs)
router.get("/:id", getBlogById);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
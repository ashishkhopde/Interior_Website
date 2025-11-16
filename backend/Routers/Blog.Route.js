import { Router } from "express";
import { getAllBlogs, getBlogById, createBlog } from "../Controllers/Blog.Controller.js";

const router = Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.post("/", createBlog);

export default router;
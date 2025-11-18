import { Router } from "express";
import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog, getTotalBlogs } from "../Controllers/Blog.Controller.js";
import { upload } from "../Middleware/multer.middleware.js";

const router = Router();

router.get("/", getAllBlogs);
router.get("/total", getTotalBlogs)
router.get("/:id", getBlogById);
router.post("/",
    upload.fields([{
        name: "blogImage", maxCount: 1
    }]),
    createBlog
);
router.put("/:id",
    upload.fields([{
        name: "blogImage", maxCount: 1
    }]),
    updateBlog
);
router.delete("/:id", deleteBlog);

export default router;
import BlogModel from "../Models/Blog.Model.js";

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find({}).sort({ createdAt: -1 });
        res.status(200).json({
            message: "Blogs fetched successfully",
            blogs
        });
    }catch(err){
        console.log("Error in getting blogs:", err);
        res.status(500).json({ message: "Server Error" });
    }
}

export const createBlog = async (req, res) => {
    try {
        const { title, description, image, author, tags } = req.body;
        const newBlog = await BlogModel.create({ title, description, image, author, tags });
        res.status(201).json({
            message: "Blog created successfully",
            blog: newBlog
        });
    } catch(err) {
        console.log("Error in creating blog:", err)
        res.status(500).json({
            message: "Blog creation error"
        });
    }
}

export const getBlogById = async (req, res) => {
    try {
        const {id} = req.params;
        const blog = await BlogModel.findById(id);
        res.status(200).json({
            message: "Blog fetched successfully",
            blog
        });
    }catch(err){
        console.log("Error in getting blog:", err);
        res.status(500).json({ message: "Server Error" });
    }
}
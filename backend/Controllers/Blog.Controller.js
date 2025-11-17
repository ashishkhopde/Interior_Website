import BlogModel from "../Models/Blog.Model.js";

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find({}).sort({ createdAt: -1 });
        res.status(200).json({
            message: "Blogs fetched successfully",
            blogs
        });
    } catch (err) {
        console.log("Error in getting blogs:", err);
        res.status(500).json({ message: "Server Error" });
    }
}

export const createBlog = async (req, res) => {
    try {
        const { title, description, author } = req.body;

        const blogImages = req.files?.blogImages[0]?.path;

        const image = await uploadOnCloudinary(blogImages);

        // console.log("Uploaded image info:", image);

        if (!image) {
            console.log("Image upload failed");
            return res.status(500).json({
                message: "Image upload failed"
            });
        }

        const newBlog = await BlogModel.create({ title, description, image, author });
        res.status(201).json({
            message: "Blog created successfully",
            blog: newBlog
        });
    } catch (err) {
        console.log("Error in creating blog:", err)
        res.status(500).json({
            message: "Blog creation error"
        });
    }
}

export const getTotalBlogs = async (req, res) => {
    try {
        const totalBlogs = await BlogModel.countDocuments();
        res.status(200).json({
            message: "Total blogs fetched successfully",
            totalBlogs,
        });
    } catch (error) {
        console.error("Error fetching total blogs:", error);
        res.status(500).json({
            message: "Server Error",
            error: error.message,
        });
    }
};

export const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await BlogModel.findById(id);
        res.status(200).json({
            message: "Blog fetched successfully",
            blog
        });
    } catch (err) {
        console.log("Error in getting blog:", err);
        res.status(500).json({ message: "Server Error" });
    }
}

export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, image, author } = req.body;
        const updatedBlog = await BlogModel.findByIdAndUpdate(id, { title, description, image, author });
        res.status(200).json({
            message: "Blog updated successfully",
            blog: updatedBlog
        });
    } catch (err) {
        console.log("Error in updating blog:", err);
        res.status(500).json({ message: "Server Error" });
    }
}

export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        await BlogModel.findByIdAndDelete(id);
        res.status(200).json({
            message: "Blog deleted successfully"
        });
    } catch (err) {
        console.log("Error in deleting blog:", err);
        res.status(500).json({ message: "Server Error" });
    }
}
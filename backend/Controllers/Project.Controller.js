import ProjectModel from "../Models/Project.Model.js";

export const getAllProjects = async (req, res) => {
    try {
        const posts = await ProjectModel.find({}).sort({ createdAt: -1 });
        res.status(200).json({
            message: "Posts fetched successfully",
            posts
        });
    }catch(err){
        console.log("Error in getting posts:", err);
        res.status(500).json({ message: "Server Error" });
    }
}

export const createProjects = async (req, res) => {
    try {

        const { clint, year, author, image, description, pojectTitle } = req.body;
        const newPost = await ProjectModel.create({clint, year, author, image, description, pojectTitle});

        res.status(201).json({
            message: "Post created successfully",
            post: newPost
        });

    } catch(err) {

        console.log("Error in creating posts:", err)
        res.status(500).json({
            message: "Post creation error"
        });

    }
}

export const getProjectById = async (req, res) => {
    try {
        const {id} = req.params;
        const post = await ProjectModel.findById(id);
        res.status(200).json({
            message: "Posts fetched successfully",
            post
        });
    }catch(err){
        console.log("Error in getting posts:", err);
        res.status(500).json({ message: "Server Error" });
    }
}
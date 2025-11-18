import ProjectModel from "../Models/Project.Model.js";
import { uploadOnCloudinary } from "../Utils/cloudnary.js";

export const getAllProjects = async (req, res) => {
    try {
        const project = await ProjectModel.find({}).sort({ createdAt: -1 });
        res.status(200).json({
            message: "Posts fetched successfully",
            project
        });
    } catch (err) {
        console.log("Error in getting posts:", err);
        res.status(500).json({ message: "Server Error" });
    }
}

export const getTotalProjects = async (req, res) => {
  try {
    const totalProjects = await ProjectModel.countDocuments();
    res.status(200).json({
      message: "Total projects fetched successfully",
      totalProjects,
    });
  } catch (error) {
    console.error("Error fetching total projects:", error);
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

export const createProjects = async (req, res) => {
    try {

        const { client, year, author, description, projectTitle } = req.body;
        const projectImages = req.files?.projectImages[0]?.path;

        const image = await uploadOnCloudinary(projectImages);

        // console.log("Uploaded image info:", image);

        if (!image) {
            console.log("Image upload failed");
            return res.status(500).json({
                message: "Image upload failed"
            });
        }

        const newProject = await ProjectModel.create({ client, year, author, image: image.url, description, projectTitle });

        res.status(201).json({
            message: "Post created successfully",
            project: newProject
        });

    } catch (err) {

        console.log("Error in creating posts:", err)
        res.status(500).json({
            message: "Post creation error"
        });

    }
}

export const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await ProjectModel.findById(id);
        res.status(200).json({
            message: "Posts fetched successfully",
            post
        });
    } catch (err) {
        console.log("Error in getting posts:", err);
        res.status(500).json({ message: "Server Error" });
    }
}

export const deleteProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        await ProjectModel.findByIdAndDelete(id);
        res.status(200).json({
            message: "Post deleted successfully"
        });
    } catch (err) {
        console.log("Error in deleting post:", err);
        res.status(500).json({ message: "Server Error" });
    }
}

export const updateProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    // Extract text fields
    const { client, year, author, description, projectTitle } = req.body;

    let image;

    // ✅ If new image uploaded, upload to Cloudinary
    if (req.files && req.files.projectImage && req.files.projectImage.length > 0) {
      const projectImagePath = req.files.projectImage[0].path;
      const uploadedImage = await uploadOnCloudinary(projectImagePath);

      if (!uploadedImage) {
        console.log("Image upload failed");
        return res.status(500).json({
          message: "Image upload failed",
        });
      }

      image = uploadedImage.url;
    } else {
      // ✅ No new image uploaded → keep existing one
      const existingProject = await ProjectModel.findById(id);
      if (!existingProject) {
        return res.status(404).json({ message: "Project not found" });
      }
      image = existingProject.image;
    }

    // ✅ Perform the update
    const updatedProject = await ProjectModel.findByIdAndUpdate(
      id,
      { client, year, author, image, description, projectTitle },
      { new: true }
    );

    res.status(200).json({
      message: "Project updated successfully",
      project: updatedProject,
    });
  } catch (err) {
    console.log("Error in updating project:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

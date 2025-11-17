import ServiceModel from "../Models/Service.Model.js";

export const getServices = async (req, res) => {
    try {
        const services = await ServiceModel.find({}).sort({ createdAt: -1 });
        res.status(200).json({
            message: "Services fetched successfully",
            services
        });
    } catch (err) {
        console.log("Error in getting services:", err);
        res.status(500).json({ message: "Server Error" });
    }
}

export const getTotalServices = async (req, res) => {
    try {
        const totalServices = await ServiceModel.countDocuments();
        res.status(200).json({
            message: "Total services fetched successfully",
            totalServices,
        });
    } catch (error) {
        console.error("Error fetching total services:", error);
        res.status(500).json({
            message: "Server Error",
            error: error.message,
        });
    }
};

export const createService = async (req, res) => {
    try {
        const { title, description } = req.body;

        const servicesImages = req.files?.servicesImages[0]?.path;

        const image = await uploadOnCloudinary(servicesImages);

        // console.log("Uploaded image info:", image);

        if (!image) {
            console.log("Image upload failed");
            return res.status(500).json({
                message: "Image upload failed"
            });
        }


        const newService = await ServiceModel.create({ title, description, image });
        res.status(201).json({
            message: "Service created successfully",
            service: newService
        });
    } catch (err) {
        console.log("Error in creating service:", err);
        res.status(500).json({
            message: "Service creation error"
        });
    }
}

export const getServiceById = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await ServiceModel.findById(id);
        res.status(200).json({
            message: "Service fetched successfully",
            service
        });
    } catch (err) {
        console.log("Error in getting service:", err);
        res.status(500).json({ message: "Server Error" });
    }
}

export const updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, image } = req.body;
        const updatedService = await ServiceModel.findByIdAndUpdate(id, { title, description, image });
        res.status(200).json({
            message: "Service updated successfully",
            service: updatedService
        });
    } catch (err) {
        console.log("Error in updating service:", err);
        res.status(500).json({ message: "Server Error" });
    }
}

export const deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        await ServiceModel.findByIdAndDelete(id);
        res.status(200).json({
            message: "Service deleted successfully"
        });
    } catch (err) {
        console.log("Error in deleting service:", err);
        res.status(500).json({ message: "Server Error" });
    }
}
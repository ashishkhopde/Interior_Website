import { Router } from "express";
import { getServices, getServiceById, createService, updateService, deleteService, getTotalServices } from "../Controllers/Service.Controller.js"
import { upload } from "../Middleware/multer.middleware.js";

const router = Router();

router.get("/", getServices);
router.get("/total", getTotalServices);
router.get("/:id", getServiceById);
router.post("/", 
    upload.fields([{
        name: "serviceImage", maxCount: 1
    }]),
    createService
);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

export default router;
import { Router } from "express";
import { getServices, getServiceById, createService, updateService, deleteService, getTotalServices } from "../Controllers/Service.Controller.js"

const router = Router();

router.get("/", getServices);
router.get("/total", getTotalServices);
router.get("/:id", getServiceById);
router.post("/", 
    upload.fields([{
        name: "servicesImages", maxCount: 1
    }]),
    createService
);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

export default router;
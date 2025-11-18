import { Router } from "express";
import {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
  getTotalServices,
} from "../Controllers/Service.Controller.js";
import { upload } from "../Middleware/multer.middleware.js";
import { verifyToken } from "../Middleware/auth.middleware.js"; 

const router = Router();

// Public routes (no login required)
router.get("/", getServices);
router.get("/total", getTotalServices);
router.get("/:id", getServiceById);

// Protected routes (only admin can access)
router.post(
  "/",
  verifyToken, 
  upload.fields([{ name: "serviceImage", maxCount: 1 }]),
  createService
);

router.put(
  "/:id",
  verifyToken,
  upload.fields([{ name: "serviceImage", maxCount: 1 }]),
  updateService
);

router.delete("/:id", verifyToken, deleteService); 

export default router;

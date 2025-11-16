import { Router } from "express";
import { getServices, getServiceById, createService } from "../Controllers/Service.Controller.js"

const router = Router();

router.get("/", getServices);
router.get("/:id", getServiceById);
router.post("/", createService);

export default router;
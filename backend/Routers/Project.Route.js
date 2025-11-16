import { Router } from "express";
import { getAllProjects, createProjects, getProjectById } from "../Controllers/Project.Controller.js";

const router = Router();

router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.post('/', createProjects);

export default router;
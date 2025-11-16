import { Router } from "express";
import { getAllProjects, createProjects, getProjectById, deleteProjectById, updateProjectById } from "../Controllers/Project.Controller.js";

const router = Router();

router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.post('/', createProjects);
router.put('/:id', updateProjectById);
router.delete('/:id', deleteProjectById);

export default router;
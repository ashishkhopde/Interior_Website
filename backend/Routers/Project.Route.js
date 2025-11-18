import { Router } from "express";
import { getAllProjects, createProjects, getProjectById, deleteProjectById, updateProjectById, getTotalProjects } from "../Controllers/Project.Controller.js";
import { upload } from "../Middleware/multer.middleware.js";

const router = Router();

router.get('/', getAllProjects);
router.get('/total', getTotalProjects);
router.get('/:id', getProjectById);
router.post('/', 
    upload.fields([{
        name: "projectImages", maxCount: 1
    }]),
    createProjects
);
router.put('/:id', 
    upload.fields([{
        name: "projectImages", maxCount: 1
    }]),
    updateProjectById
);
router.delete('/:id', deleteProjectById);

export default router;
import express from 'express';
import { GraduationController } from "../controllers/graduationController";


const router = express.Router();


router.delete('/:id', GraduationController.deleteGraduationController);
router.patch('/:id', GraduationController.patchGraduationController);
router.get('/:id', GraduationController.getGraduationByIdController);
router.get('/', GraduationController.getGraduationController);
router.post('/', GraduationController.postGraduationController);







export default router;
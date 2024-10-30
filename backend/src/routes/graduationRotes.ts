import express from 'express';
import { GraduationController } from "../controllers/graduationController";
import authGuard from '../middlewares/authGhard';


const router = express.Router();


router.delete('/:id', authGuard, GraduationController.deleteGraduationController);
router.patch('/:id', authGuard, GraduationController.patchGraduationController);
router.get('/:id', authGuard, GraduationController.getGraduationByIdController);
router.get('/', authGuard, GraduationController.getGraduationController);
router.post('/', authGuard, GraduationController.postGraduationController);







export default router;
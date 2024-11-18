import express from 'express';
import { GraduationController } from "../controllers/graduationController";
import authGuard from '../middlewares/authGhard';


const router = express.Router();


router.get('/s/q', authGuard, GraduationController.getGraduationsByNameController);
router.delete('/s/:id', authGuard, GraduationController.deleteGraduationController);
router.patch('/s/:id', authGuard, GraduationController.patchGraduationController);
router.get('/s/:id', authGuard, GraduationController.getGraduationByIdController);
router.get('/', authGuard, GraduationController.getGraduationController);
router.post('/', authGuard, GraduationController.postGraduationController);







export default router;
import express from 'express';
import { TeacherController } from "../controllers/teacherController";
import authGuard from '../middlewares/authGhard';


const router = express.Router();

router.delete('/s/:id', authGuard, TeacherController.deleteTeacherController);
router.patch('/s/:id', authGuard, TeacherController.patchTeacherController);
router.get('/s/:id', authGuard, TeacherController.getTeacherByIdController);
router.get('/', authGuard, TeacherController.getTeacherController);
router.post('/', authGuard, TeacherController.postTeacherController);




export default router;
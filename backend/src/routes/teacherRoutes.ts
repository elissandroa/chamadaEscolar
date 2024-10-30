import express from 'express';
import { TeacherController } from "../controllers/teacherController";
import authGuard from '../middlewares/authGhard';


const router = express.Router();

router.delete('/:id', authGuard, TeacherController.deleteTeacherController);
router.patch('/:id', authGuard, TeacherController.patchTeacherController);
router.get('/:id', authGuard, TeacherController.getTeacherByIdController);
router.get('', authGuard, TeacherController.getTeacherController);
router.post('', authGuard, TeacherController.postTeacherController);




export default router;
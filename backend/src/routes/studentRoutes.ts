import express from 'express';
import { StudentController } from "../controllers/studentController";
import authGuard from '../middlewares/authGhard';

const router = express.Router();

router.delete('/:id', authGuard, StudentController.deleteStudentController);
router.patch('/:id', authGuard, StudentController.patchStudentController);
router.get('/:id', authGuard, StudentController.getStudentByIdController);
router.get('', authGuard, StudentController.getStudentController);
router.post('', authGuard, StudentController.postStudentController);




export default router;
import express from 'express';
import { StudentController } from "../controllers/studentController";
import authGuard from '../middlewares/authGhard';

const router = express.Router();

router.delete('/:id', StudentController.deleteStudentController);
router.patch('/:id', StudentController.patchStudentController);
router.get('/:id', authGuard, StudentController.getStudentByIdController);
router.get('', StudentController.getStudentController);
router.post('', StudentController.postStudentController);




export default router;
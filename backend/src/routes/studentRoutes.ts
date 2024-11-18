import express from 'express';
import { StudentController } from "../controllers/studentController";
import authGuard from '../middlewares/authGhard';

const router = express.Router();

router.get('/s/q', authGuard, StudentController.getStudentByNameController)
router.delete('/s/:id', authGuard, StudentController.deleteStudentController);
router.patch('/s/:id', authGuard, StudentController.patchStudentController);
router.get('/s/:id', authGuard, StudentController.getStudentByIdController);
router.get('/', authGuard, StudentController.getStudentController);
router.post('/', authGuard, StudentController.postStudentController);




export default router;
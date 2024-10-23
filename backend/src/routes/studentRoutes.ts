import express from 'express';
import { StudentController } from "../controllers/studentController";


const router = express.Router();

router.delete('/:id', StudentController.deleteStudentController);
router.patch('/:id', StudentController.patchStudentController);
router.get('/:id', StudentController.getStudentByIdController);
router.get('', StudentController.getStudentController);
router.post('', StudentController.postStudentController);




export default router;
import express from 'express';
import { TeacherController } from "../controllers/teacherController";


const router = express.Router();

router.delete('/:id', TeacherController.deleteTeacherController);
router.patch('/:id', TeacherController.patchTeacherController);
router.get('/:id', TeacherController.getTeacherByIdController);
router.get('', TeacherController.getTeacherController);
router.post('', TeacherController.postTeacherController);




export default router;
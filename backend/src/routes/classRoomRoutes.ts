import express from 'express';
import { ClassRoomController } from "../controllers/classRoomController";
import authGuard from '../middlewares/authGhard';


const router = express.Router();

router.delete('/:id', authGuard, ClassRoomController.deleteClassRoomController);
router.patch('/:id', authGuard, ClassRoomController.patchClassRoomController);
router.get('/:id', authGuard, ClassRoomController.getClassRoomByIdController);
router.get('', authGuard, ClassRoomController.getClassRoomController);
router.post('', authGuard, ClassRoomController.postClassRoomController);




export default router;
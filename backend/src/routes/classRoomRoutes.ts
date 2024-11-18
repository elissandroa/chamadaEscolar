import express from 'express';
import { ClassRoomController } from "../controllers/classRoomController";
import authGuard from '../middlewares/authGhard';


const router = express.Router();

router.get('/s/q', authGuard, ClassRoomController.getClassRoomByIdController);
router.delete('/s/:id', authGuard, ClassRoomController.deleteClassRoomController);
router.patch('/s/:id', authGuard, ClassRoomController.patchClassRoomController);
router.get('/s/:id', authGuard, ClassRoomController.getClassRoomByIdController);
router.get('/', authGuard, ClassRoomController.getClassRoomController);
router.post('/', authGuard, ClassRoomController.postClassRoomController);




export default router;
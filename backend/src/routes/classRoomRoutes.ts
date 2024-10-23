import express from 'express';
import { ClassRoomController } from "../controllers/classRoomController";


const router = express.Router();

router.delete('/:id', ClassRoomController.deleteClassRoomController);
router.patch('/:id', ClassRoomController.patchClassRoomController);
router.get('/:id', ClassRoomController.getClassRoomByIdController);
router.get('', ClassRoomController.getClassRoomController);
router.post('', ClassRoomController.postClassRoomController);




export default router;
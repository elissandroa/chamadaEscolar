import express from 'express';
import { TutorController } from "../controllers/tutorController";


const router = express.Router();

router.delete('/:id', TutorController.deleteTutorController);
router.patch('/:id', TutorController.patchTutorController);
router.get('/:id', TutorController.getTutorByIdController);
router.get('', TutorController.getTutorController);
router.post('', TutorController.postTutorController);




export default router;
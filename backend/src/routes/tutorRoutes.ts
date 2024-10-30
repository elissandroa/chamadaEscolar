import express from 'express';
import { TutorController } from "../controllers/tutorController";
import authGuard from '../middlewares/authGhard';


const router = express.Router();

router.delete('/:id', authGuard, TutorController.deleteTutorController);
router.patch('/:id', authGuard, TutorController.patchTutorController);
router.get('/:id', authGuard, TutorController.getTutorByIdController);
router.get('', authGuard, TutorController.getTutorController);
router.post('', authGuard, TutorController.postTutorController);




export default router;
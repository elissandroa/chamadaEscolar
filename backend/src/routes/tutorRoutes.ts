import express from 'express';
import { TutorController } from "../controllers/tutorController";
import authGuard from '../middlewares/authGhard';


const router = express.Router();
router.get('/s/q', authGuard, TutorController.getTutorsByNameController);
router.delete('/s/:id', authGuard, TutorController.deleteTutorController);
router.patch('/s/:id', authGuard, TutorController.patchTutorController);
router.get('/s/:id', authGuard, TutorController.getTutorByIdController);
router.get('/', authGuard, TutorController.getTutorController);
router.post('/', authGuard, TutorController.postTutorController);




export default router;
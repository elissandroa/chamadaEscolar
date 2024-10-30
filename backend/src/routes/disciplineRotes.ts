import express from 'express';
import { DisciplineController } from "../controllers/disciplineController";
import authGuard from '../middlewares/authGhard';


const router = express.Router();


router.delete('/:id', authGuard, DisciplineController.deleteDisciplineController);
router.patch('/:id', authGuard, DisciplineController.patchDisciplineController);
router.get('/:id', authGuard, DisciplineController.getDisciplineByIdController);
router.get('/', authGuard, DisciplineController.getDisciplineController);
router.post('/', authGuard, DisciplineController.postDisciplineController);







export default router;
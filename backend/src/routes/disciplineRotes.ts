import express from 'express';
import { DisciplineController } from "../controllers/disciplineController";


const router = express.Router();


router.delete('/:id', DisciplineController.deleteDisciplineController);
router.patch('/:id', DisciplineController.patchDisciplineController);
router.get('/:id', DisciplineController.getDisciplineByIdController);
router.get('/', DisciplineController.getDisciplineController);
router.post('/', DisciplineController.postDisciplineController);







export default router;
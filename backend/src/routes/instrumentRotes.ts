import express from 'express';
import { InstrumentController } from "../controllers/instrumentController";
import authGuard from '../middlewares/authGhard';


const router = express.Router();


router.delete('/:id', authGuard, InstrumentController.deleteInstrumentController);
router.patch('/:id', authGuard, InstrumentController.patchInstrumentController);
router.get('/:id', authGuard, InstrumentController.getInstrumentByIdController);
router.get('/', authGuard, InstrumentController.getInstrumentController);
router.post('/', authGuard, InstrumentController.postInstrumentController);







export default router;
import express from 'express';
import { InstrumentController } from "../controllers/instrumentController";
import authGuard from '../middlewares/authGhard';


const router = express.Router();

router.get('/s/q', authGuard, InstrumentController.getInstrumentsByNameController);
router.delete('/s/:id', authGuard, InstrumentController.deleteInstrumentController);
router.patch('/s/:id', authGuard, InstrumentController.patchInstrumentController);
router.get('/s/:id', authGuard, InstrumentController.getInstrumentByIdController);
router.get('/', authGuard, InstrumentController.getInstrumentController);
router.post('/', authGuard, InstrumentController.postInstrumentController);







export default router;
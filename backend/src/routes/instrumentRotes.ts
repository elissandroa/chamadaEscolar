import express from 'express';
import { InstrumentController } from "../controllers/instrumentController";


const router = express.Router();


router.delete('/:id', InstrumentController.deleteInstrumentController);
router.patch('/:id', InstrumentController.patchInstrumentController);
router.get('/:id', InstrumentController.getInstrumentByIdController);
router.get('/', InstrumentController.getInstrumentController);
router.post('/', InstrumentController.postInstrumentController);







export default router;
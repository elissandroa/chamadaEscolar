import express from 'express';
import { SchoolTestController } from "../controllers/schoolTestController";
import authGuard from '../middlewares/authGhard';


const router = express.Router();

router.delete('/:id', authGuard, SchoolTestController.deleteSchoolTestController);
router.patch('/:id', authGuard, SchoolTestController.patchSchoolTestController);
router.get('/:id', authGuard, SchoolTestController.getSchoolTestByIdController);
router.get('', authGuard, SchoolTestController.getSchoolTestController);
router.post('', authGuard, SchoolTestController.postSchoolTestController);




export default router;
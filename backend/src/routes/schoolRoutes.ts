import express from 'express';
import { SchoolController } from "../controllers/schoolController";
import authGuard from '../middlewares/authGhard';


const router = express.Router();

router.delete('/:id', authGuard, SchoolController.deleteSchoolController);
router.patch('/:id', authGuard, SchoolController.patchSchoolController);
router.get('/:id', authGuard, SchoolController.getSchoolByIdController);
router.get('', authGuard, SchoolController.getSchoolController);
router.post('', authGuard, SchoolController.postSchoolController);




export default router;
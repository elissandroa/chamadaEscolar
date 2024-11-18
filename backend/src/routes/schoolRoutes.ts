import express from 'express';
import { SchoolController } from "../controllers/schoolController";
import authGuard from '../middlewares/authGhard';


const router = express.Router();
router.get('/s/q', authGuard, SchoolController.getSchoolsByNameController);
router.delete('/s/:id', authGuard, SchoolController.deleteSchoolController);
router.patch('/s/:id', authGuard, SchoolController.patchSchoolController);
router.get('/s/:id', authGuard, SchoolController.getSchoolByIdController);
router.get('/', authGuard, SchoolController.getSchoolController);
router.post('/', authGuard, SchoolController.postSchoolController);




export default router;
import express from 'express';
import { SchoolRollCallController } from "../controllers/schoolRollCallController";
import authGuard from '../middlewares/authGhard';


const router = express.Router();

router.delete('/:id', authGuard, SchoolRollCallController.deleteSchoolRollCallController);
router.patch('/:id', authGuard, SchoolRollCallController.patchSchoolRollCallController);
router.get('/:id', authGuard, SchoolRollCallController.getSchoolRollCallByIdController);
router.get('', authGuard, SchoolRollCallController.getSchoolRollCallController);
router.post('', authGuard, SchoolRollCallController.postSchoolRollCallController);




export default router;
import express from 'express';
import { SchoolRollCallController } from "../controllers/schoolRollCallController";


const router = express.Router();

router.delete('/:id', SchoolRollCallController.deleteSchoolRollCallController);
router.patch('/:id', SchoolRollCallController.patchSchoolRollCallController);
router.get('/:id', SchoolRollCallController.getSchoolRollCallByIdController);
router.get('', SchoolRollCallController.getSchoolRollCallController);
router.post('', SchoolRollCallController.postSchoolRollCallController);




export default router;
import express from 'express';
import { SchoolController } from "../controllers/schoolController";


const router = express.Router();

router.delete('/:id', SchoolController.deleteSchoolController);
router.patch('/:id', SchoolController.patchSchoolController);
router.get('/:id', SchoolController.getSchoolByIdController);
router.get('', SchoolController.getSchoolController);
router.post('', SchoolController.postSchoolController);




export default router;
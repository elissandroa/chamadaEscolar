import express from 'express';
import { SchoolTestController } from "../controllers/schoolTestController";


const router = express.Router();

router.delete('/:id', SchoolTestController.deleteSchoolTestController);
router.patch('/:id', SchoolTestController.patchSchoolTestController);
router.get('/:id', SchoolTestController.getSchoolTestByIdController);
router.get('', SchoolTestController.getSchoolTestController);
router.post('', SchoolTestController.postSchoolTestController);




export default router;
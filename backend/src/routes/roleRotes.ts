import express from 'express';
import { RoleController } from "../controllers/roleController";


const router = express.Router();


router.delete('/:id', RoleController.deleteRoleController);
router.patch('/:id', RoleController.patchRoleController);
router.get('/:id', RoleController.getRoleByIdController);
router.get('/', RoleController.getRoleController);
router.post('/', RoleController.postRoleController);







export default router;
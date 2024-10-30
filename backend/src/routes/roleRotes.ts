import express from 'express';
import { RoleController } from "../controllers/roleController";
import authGuard from '../middlewares/authGhard';


const router = express.Router();


router.delete('/:id', authGuard, RoleController.deleteRoleController);
router.patch('/:id', authGuard, RoleController.patchRoleController);
router.get('/:id', authGuard, RoleController.getRoleByIdController);
router.get('/', authGuard, RoleController.getRoleController);
router.post('/', RoleController.postRoleController);







export default router;
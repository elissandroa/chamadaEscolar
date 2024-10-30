import express from 'express';
import { UserController } from "../controllers/userController";
import authGuard from '../middlewares/authGhard';



const router = express.Router();

router.delete('/:id', authGuard, UserController.deleteUserController);
router.patch('/:id', authGuard, UserController.patchUserController);
router.get('/:id', authGuard, UserController.getUserByIdController);
router.get('', authGuard, UserController.getUserController);
router.post('', UserController.postUserController);
router.post('/login', UserController.postUserLoginController)




export default router;
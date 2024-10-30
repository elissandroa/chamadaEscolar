import express from 'express';
import { UserController } from "../controllers/userController";



const router = express.Router();

router.delete('/:id', UserController.deleteUserController);
router.patch('/:id', UserController.patchUserController);
router.get('/:id', UserController.getUserByIdController);
router.get('', UserController.getUserController);
router.post('', UserController.postUserController);
router.post('/login', UserController.postUserLoginController)




export default router;
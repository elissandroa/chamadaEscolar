import express from 'express';
import { AddressController } from "../controllers/addressController";
import authGuard from '../middlewares/authGhard';


const router = express.Router();

router.delete('/:id', authGuard, AddressController.deleteAddressController);
router.patch('/:id', authGuard, AddressController.patchAddressController);
router.get('/:id', authGuard, AddressController.getAddressByIdController);
router.get('', authGuard, AddressController.getAddressController);
router.post('', authGuard, AddressController.postAddressController);




export default router;
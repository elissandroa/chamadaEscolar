import express from 'express';
import { AddressController } from "../controllers/addressController";
import authGuard from '../middlewares/authGhard';


const router = express.Router();

router.get('/s/q', authGuard, AddressController.getAddressByStreetController);
router.delete('/s/:id', authGuard, AddressController.deleteAddressController);
router.patch('/s/:id', authGuard, AddressController.patchAddressController);
router.get('/s/:id', authGuard, AddressController.getAddressByIdController);
router.get('/', authGuard, AddressController.getAddressController);
router.post('/', authGuard, AddressController.postAddressController);




export default router;
import express from 'express';
import { AddressController } from "../controllers/addressController";


const router = express.Router();

router.delete('/:id', AddressController.deleteAddressController);
router.patch('/:id', AddressController.patchAddressController);
router.get('/:id', AddressController.getAddressByIdController);
router.get('', AddressController.getAddressController);
router.post('', AddressController.postAddressController);




export default router;
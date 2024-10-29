import { AddressService as service } from "../services/addressService";
import { addressType } from "../types/address";
import { Request, Response } from "express";


export class AddressController {

    static async getAddressController(req: Request, res: Response) {
        const addresss = await service.getAddressService();
        if (addresss !== null) {
            res.status(200).json(addresss);
        } else {
            res.status(404).json({ message: "Registro não econtrado!" });
        }

    }

    static async getAddressByIdController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const address = await service.getAddressByIdService(id);
        if (address !== null) {
            res.status(200).json(address);
        } else {
            res.status(404).json({ message: "Registro não econtrado!" });
        }
    }

    static async postAddressController(req: Request, res: Response) {
        const address: addressType = {
            street: req.body.street,
            num: req.body.num,
            neighborhood: req.body.neighborhood,
            city: req.body.city,
            zipcode: req.body.zipcode,
            state: req.body.state
        }

        if(!req.body.SchoolId) {
            delete address.SchoolId;
        }

        if(!req.body.StudentId){
            delete address.StudentId;
        }

        const newAddress = await service.postAddressService(address);

        res.status(200).json(newAddress);

    }

    static async patchAddressController(req: Request, res: Response) {

        const id = parseInt(req.params.id);
        
        const address: addressType = {
            street: req.body.street,
            num: req.body.num,
            neighborhood: req.body.neighborhood,
            city: req.body.city,
            zipcode: req.body.zipcode,
            state: req.body.state
        }

        const addressUpdated = await service.patchAddressService(id, address)

        if (addressUpdated !== null) {
            res.status(200).json(addressUpdated);
        } else {
            res.status(404).json({ message: "Registro não econtrado!" });
        }

    }

    static async deleteAddressController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const addressDeleted = await service.deleteAddressService(id);

        if (addressDeleted !== null) {
            res.status(200).json({ message: "Deletado com sucesso!" });
        } else {
            res.status(404).json({ message: "Registro não econtrado!" });
        }
    }

}
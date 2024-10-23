import { AddressRepository as repository } from "../repositories/addressRepository";
import { addressType } from "../types/address";

export class AddressService {

    static async getAddressService(){
        const addresss = await repository.getAddressRepository();
        return addresss;
    }

    static async getAddressByIdService(id:number){
        const address = await repository.getAddressByIdRepository(id);
        return address;
    } 

    static async postAddressService(address: addressType) {
         const newAddress = await repository.postAddressRepository(address);
        return newAddress;
    }

    static async patchAddressService(id:number, address:addressType){
        const addressUpdated = await repository.patchAddressRepository(id, address);
        return addressUpdated;
    }

    static async deleteAddressService(id:number){
        const addressDeleted = await repository.deleteAddressRepository(id);
        return addressDeleted;
    }


}
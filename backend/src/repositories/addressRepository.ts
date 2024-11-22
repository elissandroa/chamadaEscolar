import Address from '../models/address';
import School from '../models/school';
import Student from '../models/student';
import Teacher from '../models/teacher';
import Tutor from '../models/tutor';
import { addressType } from '../types/address';


export class AddressRepository {

    static async getAddressRepository() {
        const addresss = await Address.findAll();
        return addresss;
    }

    static async getAddressByIdRepository(id: number) {
        const address = await Address.findOne({ where: { id: id }, include: [Student, Tutor, School, Teacher ] });
        return address;
    }

    static async postAddressRepository(address: addressType) {
        const newAddress = await Address.create(address);
        return newAddress;
    }


    static async patchAddressRepository(id: number, address: addressType) {
        const addressFinded = await Address.findOne({ where: { id: id } });
        if (addressFinded != null) {
            await Address.update(address, { where: { id: id } })
            const addressUpdated = await Address.findOne({ where: { id: id } });
            return addressUpdated;
        } else {
            return addressFinded;
        }

    }

    static async deleteAddressRepository(id: number) {
        const address = await Address.findOne({ where: { id: id } });
        if (address != null) {
            await Address.destroy({ where: { id: id } });
        } else {
            null;
        }
        return address;
    }
}






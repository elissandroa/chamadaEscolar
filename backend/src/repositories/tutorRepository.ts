import Address from '../models/address';
import Tutor from '../models/tutor';
import TutorsAddresses from '../models/tutorsAddresses';
import { tutorType } from '../types/tutor';


export class TutorRepository {

    static async getTutorRepository() {
        const tutors = await Tutor.findAll();
        return tutors;
    }

    static async getTutorByIdRepository(id: number) {
        const tutor = await Tutor.findOne({ where: { id: id } });
        return tutor;
    }

    static async postTutorRepository(tutor: tutorType) {
        const newTutor = await Tutor.create(tutor);
        const newTutorId = newTutor.id;

        const listAddresses = tutor.Addresses;

        listAddresses.map((item) => item.TutorId = newTutorId);

        for (let i = 0; i < listAddresses.length; i++) {
            const address = await Address.findByPk(listAddresses[i].AddressId)
            await newTutor.addAddress(address);
        }

        return newTutor;
    }


    static async patchTutorRepository(id: number, tutor: tutorType) {
        const tutorFinded = await Tutor.findOne({ where: { id: id } });
        if (tutorFinded != null) {
            await Tutor.update(tutor, { where: { id: id } })
        }

        let listAddressesDb = [];
        let listAddressesReq = [];

        for (let i = 0; i < tutor.Addresses.length; i++) {
            listAddressesReq.push(tutor.Addresses[i].AddressId);
        }
        const addressesDb = await TutorsAddresses.findAll({ where: { TutorId: id } });
        for (let i = 0; i < addressesDb.length; i++) {
            listAddressesDb.push(addressesDb[i].dataValues.AddressId);
        }

        const addressToDelete = listAddressesDb.filter((item) => !listAddressesReq.includes(item));
        const addressToAdd = listAddressesReq.filter((item) => !listAddressesDb.includes(item));
        console.log("AddressReq",listAddressesReq);
        console.log("AddressDb", listAddressesDb);
        console.log("AddressToAdd", addressToAdd);
        console.log("AddressToDelete", addressToDelete);


        if (tutorFinded) {
            if (tutor.Addresses.length > addressesDb.length) {
                for (let i = 0; i < addressToAdd.length; i++) {
                    const address = await Address.findByPk(addressToAdd[i]);
                    await tutorFinded.addAddress(address);
                }
            }

            if (tutor.Addresses.length < addressesDb.length) {
                for (let i = 0; i < addressToDelete.length; i++) {
                    await TutorsAddresses.destroy({ where: { AddressId: addressToDelete[i], TutorId: id } })
                }
            }
        }



        const turorsUpdated = await Tutor.findOne({ where: { id: id }, include: Address });

        return turorsUpdated;
    }

    static async deleteTutorRepository(id: number) {
        const tutor = await Tutor.findOne({ where: { id: id } });
        if (tutor != null) {
            await Tutor.destroy({ where: { id: id } });
        } else {
            null;
        }
        return tutor;
    }
}






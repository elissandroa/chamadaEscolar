import Address from '../models/address';
import School from '../models/school';
import SchoolsAddresses from '../models/schoolAddresses';
import { schoolType } from '../types/school';


export class SchoolRepository {

    static async getSchoolRepository() {
        const schools = await School.findAll();
        return schools;
    }

    static async getSchoolByIdRepository(id: number) {
        const school = await School.findOne({ where: { id: id } });
        return school;
    }

    static async postSchoolRepository(school: schoolType) {
        const newSchool = await School.create(school);
        const id: number = newSchool.id;

        const listAddresses = school.Addresses;

        if (listAddresses) {
            listAddresses.map((school) => school.SchoolId = id);
        }

        console.log(listAddresses);
        if (listAddresses) {
            for (let i = 0; i < listAddresses.length; i++) {
                const address = await Address.findByPk(listAddresses[i].AddressId);
                newSchool.addAddress(address);
            }
        }


        return newSchool;
    }


    static async patchSchoolRepository(id: number, school: schoolType) {
        const schoolFinded = await School.findOne({ where: { id: id } });
        if (schoolFinded != null) {
            await School.update(school, { where: { id: id } })
        }

        if (schoolFinded != null) {

            let listChoolDb = [];
            let listSchoolReq = [];


            const schoolDb = await SchoolsAddresses.findAll({ where: { SchoolId: id } });
            for (let i = 0; i < schoolDb.length; i++) {
                listChoolDb.push(schoolDb[i].dataValues.AddressId);
            }

            for (let i = 0; i < school.Addresses.length; i++) {
                listSchoolReq.push(school.Addresses[i].AddressId);
            }

            const addressToDelete = listChoolDb.filter((item) => !listSchoolReq.includes(item));
            const addressRoAdd = listSchoolReq.filter((item) => !listChoolDb.includes(item));


            if (school.Addresses.length < schoolDb.length) {
                for (let i = 0; i < addressToDelete.length; i++) {
                    SchoolsAddresses.destroy({ where: { SchoolId: id, AddressId: addressToDelete[i] } });
                }
            }

            if (school.Addresses.length > schoolDb.length) {
                for (let i = 0; i < addressRoAdd.length; i++) {
                    const address = await Address.findByPk(addressRoAdd[i]);
                    await schoolFinded.addAddress(address);
                }
            }

            const schoolUpdated = await School.findOne({ where: { id: id } });
            return schoolUpdated;



        }

    }

    static async deleteSchoolRepository(id: number) {
        const school = await School.findOne({ where: { id: id } });
        if (school != null) {
            await School.destroy({ where: { id: id } });
        } else {
            null;
        }
        return school;
    }
}






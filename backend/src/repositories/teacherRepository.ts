import Address from '../models/address';
import Teacher from '../models/teacher';
import TeachersAddresses from '../models/teachersAddresses';
import TutorsAddresses from '../models/tutorsAddresses';
import { teacherType } from '../types/teacher';


export class TeacherRepository {

    static async getTeacherRepository() {
        const teachers = await Teacher.findAll();
        return teachers;
    }

    static async getTeacherByIdRepository(id: number) {
        const teacher = await Teacher.findOne({ where: { id: id } });
        return teacher;
    }

    static async postTeacherRepository(teacher: teacherType) {
        const newTeacher = await Teacher.create(teacher);
        const newTeacherId = newTeacher.id;

        const listAddresses = teacher.Addresses;

        listAddresses.map((item) => item.TeacherId = newTeacherId);

        for (let i = 0; i < listAddresses.length; i++) {
            const address = await Address.findByPk(listAddresses[i].AddressId)
            await newTeacher.addAddress(address);
        }

        return newTeacher;
    }


    static async patchTeacherRepository(id: number, teacher: teacherType) {
        const teacherFinded = await Teacher.findOne({ where: { id: id } });
        if (teacherFinded != null) {
            await Teacher.update(teacher, { where: { id: id } })
        }

        let listAddressesDb = [];
        let listAddressesReq = [];

        for (let i = 0; i < teacher.Addresses.length; i++) {
            listAddressesReq.push(teacher.Addresses[i].AddressId);
        }
        const addressesDb = await TeachersAddresses.findAll({ where: { TeacherId: id } });
        for (let i = 0; i < addressesDb.length; i++) {
            listAddressesDb.push(addressesDb[i].dataValues.AddressId);
        }

        const addressToDelete = listAddressesDb.filter((item) => !listAddressesReq.includes(item));
        const addressToAdd = listAddressesReq.filter((item) => !listAddressesDb.includes(item));
        console.log("AddressReq",listAddressesReq);
        console.log("AddressDb", listAddressesDb);
        console.log("AddressToAdd", addressToAdd);
        console.log("AddressToDelete", addressToDelete);


        if (teacherFinded) {
            if (teacher.Addresses.length > addressesDb.length) {
                for (let i = 0; i < addressToAdd.length; i++) {
                    const address = await Address.findByPk(addressToAdd[i]);
                    await teacherFinded.addAddress(address);
                }
            }

            if (teacher.Addresses.length < addressesDb.length) {
                for (let i = 0; i < addressToDelete.length; i++) {
                    await TeachersAddresses.destroy({ where: { AddressId: addressToDelete[i], TeacherId: id } })
                }
            }
        }



        const teacherUpdated = await Teacher.findOne({ where: { id: id }, include: Address });

        return teacherUpdated;

    }

    static async deleteTeacherRepository(id: number) {
        const teacher = await Teacher.findOne({ where: { id: id } });
        if (teacher != null) {
            await Teacher.destroy({ where: { id: id } });
        } else {
            null;
        }
        return teacher;
    }
}






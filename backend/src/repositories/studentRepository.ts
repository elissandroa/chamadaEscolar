import { isConstructorDeclaration } from 'typescript';
import Address from '../models/address';
import Instrument from '../models/instrument';
import Student from '../models/student';
import { studentType } from '../types/student';
import StudentsAddresses from '../models/studentsAddresses';
import Graduation from '../models/graduation';
import sequelize from '../db/conn';
import { Op } from 'sequelize';


export class StudentRepository {

    static async getStudentRepository() {
        const students = await Student.findAll({ include: [Instrument, Graduation] });
        return students;
    }

    static async getSudentsByNameRepository(name: string) {
        const students = await Student.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        });
        return students;
    }

    static async getStudentByIdRepository(id: number) {
        const student = await Student.findOne({ where: { id: id }, include: [Instrument, Graduation] });
        return student;
    }

    static async postStudentRepository(student: studentType) {
        const newStudent = await Student.create(student);
        const newStudentId = newStudent.id;

        const listAddresses = student.Addresses;

        listAddresses.map((item) => item.StudentId = newStudentId);

        for (let i = 0; i < listAddresses.length; i++) {
            const address = await Address.findByPk(listAddresses[i].AddressId)
            await newStudent.addAddress(address);
        }

        return newStudent;
    }


    static async patchStudentRepository(id: number, student: studentType) {
        const studentFinded = await Student.findOne({ where: { id: id } });
        if (studentFinded != null) {
            await Student.update(student, { where: { id: id } })
        }

        let listAddressesDb = [];
        let listAddressesReq = [];

        for (let i = 0; i < student.Addresses.length; i++) {
            listAddressesReq.push(student.Addresses[i].AddressId);
        }
        const addressesDb = await StudentsAddresses.findAll({ where: { StudentId: id } });
        for (let i = 0; i < addressesDb.length; i++) {
            listAddressesDb.push(addressesDb[i].dataValues.AddressId);
        }

        const addressToDelete = listAddressesDb.filter((item) => !listAddressesReq.includes(item));
        const addressToAdd = listAddressesReq.filter((item) => !listAddressesDb.includes(item));
        console.log("AddressReq", listAddressesReq);
        console.log("AddressDb", listAddressesDb);
        console.log("AddressToAdd", addressToAdd);
        console.log("AddressToDelete", addressToDelete);


        if (studentFinded) {
            if (student.Addresses.length > addressesDb.length) {
                for (let i = 0; i < addressToAdd.length; i++) {
                    const address = await Address.findByPk(addressToAdd[i]);
                    await studentFinded.addAddress(address);
                }
            }

            if (student.Addresses.length < addressesDb.length) {
                for (let i = 0; i < addressToDelete.length; i++) {
                    await StudentsAddresses.destroy({ where: { AddressId: addressToDelete[i], StudentId: id } })
                }
            }
        }



        const studentUpdated = await Student.findOne({ where: { id: id }, include: [Instrument, Graduation, Address] });

        return studentUpdated;

    }


    static async deleteStudentRepository(id: number) {
        const student = await Student.findOne({ where: { id: id } });
        if (student != null) {
            await Student.destroy({ where: { id: id } });
        } else {
            null;
        }
        return student;
    }
}






import Student from '../models/student';
import { studentType } from '../types/student';


export class StudentRepository {

    static async getStudentRepository() {
        const students = await Student.findAll();
        return students;
    }

    static async getStudentByIdRepository(id: number) {
        const student = await Student.findOne({ where: { id: id } });
        return student;
    }

    static async postStudentRepository(student: studentType) {
        const newStudent = await Student.create(student);
        return newStudent;
    }


    static async patchStudentRepository(id: number, student: studentType) {
        const studentFinded = await Student.findOne({ where: { id: id } });
        if (studentFinded != null) {
            await Student.update(student, { where: { id: id } })
            const studentUpdated = await Student.findOne({ where: { id: id } });
            return studentUpdated;
        } else {
            return studentFinded;
        }

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






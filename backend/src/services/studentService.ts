import { StudentRepository as repository } from "../repositories/studentRepository";
import { studentType } from "../types/student";

export class StudentService {

    static async getStudentService(){
        const student = await repository.getStudentRepository();
        return student;
    }

    static async getStudentByIdService(id:number){
        const student = await repository.getStudentByIdRepository(id);
        return student;
    } 

    static async postStudentService(student: studentType) {
         const newStudent = await repository.postStudentRepository(student);
        return newStudent;
    }

    static async patchStudentService(id:number, student:studentType){
        const studentUpdated = await repository.patchStudentRepository(id, student);
        return studentUpdated;
    }

    static async deleteStudentService(id:number){
        const studentDeleted = await repository.deleteStudentRepository(id);
        return studentDeleted;
    }


}
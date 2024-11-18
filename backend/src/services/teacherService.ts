import { TeacherRepository as repository } from "../repositories/teacherRepository";
import { teacherType } from "../types/teacher";

export class TeacherService {

    static async getTeachersByNameService(name:string){
        const teachers = await repository.getTeachersByNameRepository(name);
        return teachers;
    }

    static async getTeacherService(){
        const teacher = await repository.getTeacherRepository();
        return teacher;
    }

    static async getTeacherByIdService(id:number){
        const teacher = await repository.getTeacherByIdRepository(id);
        return teacher;
    } 

    static async postTeacherService(teacher: teacherType) {
         const newTeacher = await repository.postTeacherRepository(teacher);
        return newTeacher;
    }

    static async patchTeacherService(id:number, teacher:teacherType){
        const teacherUpdated = await repository.patchTeacherRepository(id, teacher);
        return teacherUpdated;
    }

    static async deleteTeacherService(id:number){
        const teacherDeleted = await repository.deleteTeacherRepository(id);
        return teacherDeleted;
    }


}
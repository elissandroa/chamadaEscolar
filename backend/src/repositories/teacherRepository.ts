import Teacher from '../models/teacher';
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
        return newTeacher;
    }


    static async patchTeacherRepository(id: number, teacher: teacherType) {
        const teacherFinded = await Teacher.findOne({ where: { id: id } });
        if (teacherFinded != null) {
            await Teacher.update(teacher, { where: { id: id } })
            const teacherUpdated = await Teacher.findOne({ where: { id: id } });
            return teacherUpdated;
        } else {
            return teacherFinded;
        }

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






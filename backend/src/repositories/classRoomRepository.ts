import Student from '../models/student';
import { classRoomType } from '../types/classRoom';
import { studentType } from '../types/student';
import ClassRoomStudents from '../models/classRoomStudents';
import ClassRoom from '../models/classRoom';

export class ClassRoomRepository {

    static async getClassRoomRepository() {
        const classRooms = await ClassRoom.findAll({ include: Student });
        return classRooms;
    }

    static async getClassRoomByIdRepository(id: number) {
        const classRoom = await ClassRoom.findOne({ where: { id: id }, include: Student });
        return classRoom;
    }

    static async postClassRoomRepository(classRoom: classRoomType) {
        const newClassRoom = await ClassRoom.create(classRoom);
        const id: number = newClassRoom.id;
        const listStudents = classRoom.Students;
        if (listStudents) {
            listStudents.map((student: { StudentId: number; ClassRoomId?: number }) => student.ClassRoomId = id);
        }
        if (listStudents) {
            for (let i = 0; i < listStudents.length; i++) {
                const student = await Student.findByPk(listStudents[i].StudentId);
                await newClassRoom.addStudent(student);
            }
        }


        return newClassRoom;
    }


    static async patchClassRoomRepository(id: number, classRoom: classRoomType) {
        const classRoomFinded = await ClassRoom.findOne({ where: { id: id } });

        if (classRoomFinded != null) {



            let listStudentsDB = [];
            let listStudentsReq = [];


            const studentsBd = await ClassRoomStudents.findAll({ where: { ClassRoomId: id } });
            for (let i = 0; i < studentsBd.length; i++) {
                listStudentsDB.push(studentsBd[i].dataValues.StudentId);
            }

            for (let i = 0; i < classRoom.Students.length; i++) {
                listStudentsReq.push(classRoom.Students[i].StudentId);
            }

            const studentsToDelete = listStudentsDB.filter((item) => !listStudentsReq.includes(item));
            const studentsToAdd = listStudentsReq.filter((item) => !listStudentsDB.includes(item));

            console.log("StudentToAdd:", studentsToAdd)
            if (classRoom.Students.length < studentsBd.length) {
                for (let i = 0; i < studentsToDelete.length; i++) {
                    ClassRoomStudents.destroy({ where: { ClassRoomId: id, StudentId: studentsToDelete[i] } });
                }
            }
           
            if (classRoom.Students.length > studentsBd.length) {
                for (let i = 0; i < studentsToAdd.length; i++) {
                    const student = await Student.findByPk(studentsToAdd[i]);
                    await classRoomFinded.addStudent(student);
                }
            }

            const updatedClassRoom = await ClassRoom.findOne({ where: { id: id }, include: Student });


            return updatedClassRoom;
        }




    }

    static async deleteClassRoomRepository(id: number) {
        const classRoom = await ClassRoom.findOne({ where: { id: id } });
        if (classRoom != null) {
            await ClassRoom.destroy({ where: { id: id } });
        } else {
            null;
        }
        return classRoom;
    }
}






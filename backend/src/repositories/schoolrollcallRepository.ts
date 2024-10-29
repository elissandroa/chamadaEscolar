import ClassRoomStudents from '../models/classRoomStudents';
import SchoolRollCall from '../models/schoolRollCall';
import SchoolRollCallsStudents from '../models/schoolRollCallsStudents';
import Student from '../models/student';
import { schoolRollCallType } from '../types/schoolRollCall';



export class SchoolRollCallRepository {

    static async getSchoolRollCallRepository() {
        const schoolRollCalls = await SchoolRollCall.findAll();
        return schoolRollCalls;
    }

    static async getSchoolRollCallByIdRepository(id: number) {
        const schoolRollCall = await SchoolRollCall.findOne({ where: { id: id }, include: Student });
        return schoolRollCall;
    }

    static async postSchoolRollCallRepository(schoolRollCall: schoolRollCallType) {

        const ClassRoomId = schoolRollCall.ClassRoomId;
        const DisciplineId = schoolRollCall.DisciplineId;

        console.log(schoolRollCall);

        const dataReq = schoolRollCall.schoolRollCallDate;
        const data = new Date(dataReq);
        schoolRollCall.schoolRollCallDate = data;
        const newSchoolRollCall = await SchoolRollCall.create(schoolRollCall);

        const schoolRollCallId = newSchoolRollCall.id;



        const studentsInClassRoom = await ClassRoomStudents.findAll({ where: { ClassRoomId: ClassRoomId } });

        for (let i = 0; i < studentsInClassRoom.length; i++) {
            const student = await Student.findByPk(studentsInClassRoom[i].dataValues.StudentId);
            await newSchoolRollCall.addStudent(student, { through: { presence: null, TeacherId: schoolRollCall.TeacherId } });
        }


        return newSchoolRollCall;
    }


    static async patchSchoolRollCallRepository(id: number, schoolRollCall: schoolRollCallType) {
        const schoolRollCallFinded = await SchoolRollCall.findOne({ where: { id: id } });
        if (schoolRollCallFinded != null) {

            const studentsDb = await ClassRoomStudents.findAll({ where: { ClassRoomId: schoolRollCall.ClassRoomId } })
            const schoolRollCallsDb = await SchoolRollCallsStudents.findAll({ where: { SchoolRollCallId: id } });

            let listStudentsReq = [];
            let listStudentsDb = [];

            if (schoolRollCall.Students) {
                for (let i = 0; i < schoolRollCall.Students?.length; i++) {
                    listStudentsReq.push(schoolRollCall.Students[i].StudentId);
                }
            }

            if (studentsDb) {
                for (let i = 0; i < studentsDb.length; i++) {
                    listStudentsDb.push(studentsDb[i].dataValues.StudentId);
                }
            }

            const studentsToDel = listStudentsReq.filter((item) => !listStudentsDb.includes(item));
            const studentsToAdd = listStudentsDb.filter((item) => !listStudentsReq.includes(item));


            if (listStudentsDb.length > listStudentsReq.length) {
                for (let i = 0; i < studentsToAdd.length; i++) {
                    const student = await Student.findByPk(studentsToAdd[i]);
                    await schoolRollCallFinded.addStudent(student, { through: { TeacherId: schoolRollCallFinded.TeacherId } });
                }
            }

            if (listStudentsReq.length > listStudentsDb.length) {
                for (let i = 0; i < studentsToDel.length; i++) {
                    await SchoolRollCallsStudents.destroy({ where: { SchoolRollCallId: id, StudentId: studentsToDel[i] } });
                }

            }


            if (listStudentsDb) {
                for (let i = 0; i < listStudentsReq.length; i++) {
                    if (schoolRollCall.Students) {
                        const presence = schoolRollCall.Students[i].presence;
                        const medicalCertificate = schoolRollCall.Students[i].medicalCertificate;
                        const student = await Student.findByPk(listStudentsReq[i]);
                        await schoolRollCallFinded.addStudent(student, { through: { presence: presence, TeacherId: schoolRollCallFinded.TeacherId, medicalCertificate: medicalCertificate } });
                    }

                }
            }

            await SchoolRollCall.update(schoolRollCall, { where: { id: id } })

            const schoolRollCallUpdated = await SchoolRollCall.findOne({ where: { id: id } });


            return schoolRollCallUpdated;


        } else {


            return schoolRollCallFinded;
        }

    }

    static async deleteSchoolRollCallRepository(id: number) {
        const schoolRollCall = await SchoolRollCall.findOne({ where: { id: id } });
        if (schoolRollCall != null) {
            await SchoolRollCall.destroy({ where: { id: id } });
        } else {
            null;
        }
        return schoolRollCall;
    }
}






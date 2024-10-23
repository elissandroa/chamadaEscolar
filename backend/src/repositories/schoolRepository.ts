import School from '../models/school';
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
        return newSchool;
    }


    static async patchSchoolRepository(id: number, school: schoolType) {
        const schoolFinded = await School.findOne({ where: { id: id } });
        if (schoolFinded != null) {
            await School.update(school, { where: { id: id } })
            const schoolUpdated = await School.findOne({ where: { id: id } });
            return schoolUpdated;
        } else {
            return schoolFinded;
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






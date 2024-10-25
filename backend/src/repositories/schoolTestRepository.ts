import SchoolTest from '../models/schooltest';
import { schoolTestType } from '../types/schooltest';


export class SchoolTestRepository {

    static async getSchoolTestRepository() {
        const schoolTests = await SchoolTest.findAll();
        return schoolTests;
    }

    static async getSchoolTestByIdRepository(id: number) {
        const schoolTest = await SchoolTest.findOne({ where: { id: id } });
        return schoolTest;
    }

    static async postSchoolTestRepository(schoolTest: schoolTestType) {
        const newSchoolTest = await SchoolTest.create(schoolTest);
        return newSchoolTest;
    }


    static async patchSchoolTestRepository(id: number, schooltest: schoolTestType) {
        const schoolTestFinded = await SchoolTest.findOne({ where: { id: id } });
        if (schoolTestFinded != null) {
            await SchoolTest.update(schooltest, { where: { id: id } })
            const schoolTestUpdated = await SchoolTest.findOne({ where: { id: id } });
            return schoolTestUpdated;
        } else {
            return schoolTestFinded;
        }

    }

    static async deleteSchoolTestRepository(id: number) {
        const schoolTest = await SchoolTest.findOne({ where: { id: id } });
        if (schoolTest != null) {
            await SchoolTest.destroy({ where: { id: id } });
        } else {
            null;
        }
        return schoolTest;
    }
}






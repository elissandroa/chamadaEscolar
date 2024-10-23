import { SchoolTestRepository as repository } from "../repositories/schoolTestRepository";
import { schoolTestType } from "../types/schooltest";

export class SchoolTestService {

    static async getSchoolTestService(){
        const schoolTests = await repository.getSchoolTestRepository();
        return schoolTests;
    }

    static async getSchoolTestByIdService(id:number){
        const schoolTest = await repository.getSchoolTestByIdRepository(id);
        return schoolTest;
    } 

    static async postSchoolTestService(schoolTest: schoolTestType) {
         const newSchoolTest = await repository.postSchoolTestRepository(schoolTest);
        return newSchoolTest;
    }

    static async patchSchoolTestService(id:number, schoolTest:schoolTestType){
        const schoolTestUpdated = await repository.patchSchoolTestRepository(id, schoolTest);
        return schoolTestUpdated;
    }

    static async deleteSchoolTestService(id:number){
        const schoolTestDeleted = await repository.deleteSchoolTestRepository(id);
        return schoolTestDeleted;
    }


}
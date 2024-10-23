import { SchoolRepository as repository } from "../repositories/schoolRepository";
import { schoolType } from "../types/school";

export class SchoolService {

    static async getSchoolService(){
        const school = await repository.getSchoolRepository();
        return school;
    }

    static async getSchoolByIdService(id:number){
        const school = await repository.getSchoolByIdRepository(id);
        return school;
    } 

    static async postSchoolService(school: schoolType) {
         const newSchool = await repository.postSchoolRepository(school);
        return newSchool;
    }

    static async patchSchoolService(id:number, school:schoolType){
        const schoolUpdated = await repository.patchSchoolRepository(id, school);
        return schoolUpdated;
    }

    static async deleteSchoolService(id:number){
        const schoolDeleted = await repository.deleteSchoolRepository(id);
        return schoolDeleted;
    }


}
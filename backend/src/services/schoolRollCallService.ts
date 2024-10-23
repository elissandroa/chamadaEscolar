import { SchoolRollCallRepository as repository } from "../repositories/schoolrollcallRepository";
import { schoolRollCallType } from "../types/schoolRollCall";

export class SchoolRollCallService {

    static async getSchoolRollCallService(){
        const schoolRollCall = await repository.getSchoolRollCallRepository();
        return schoolRollCall;
    }

    static async getSchoolRollCallByIdService(id:number){
        const schoolRollCall = await repository.getSchoolRollCallByIdRepository(id);
        return schoolRollCall;
    } 

    static async postSchoolRollCallService(schoolRollCall: schoolRollCallType) {
         const newSchoolRollCall = await repository.postSchoolRollCallRepository(schoolRollCall);
        return newSchoolRollCall;
    }

    static async patchSchoolRollCallService(id:number, schoolRollCall:schoolRollCallType){
        const schoolRollCallUpdated = await repository.patchSchoolRollCallRepository(id, schoolRollCall);
        return schoolRollCallUpdated;
    }

    static async deleteSchoolRollCallService(id:number){
        const schoolRollCallDeleted = await repository.deleteSchoolRollCallRepository(id);
        return schoolRollCallDeleted;
    }


}
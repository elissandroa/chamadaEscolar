import SchoolRollCall from '../models/schoolRollCall';
import { schoolRollCallType } from '../types/schoolRollCall';


export class SchoolRollCallRepository {

    static async getSchoolRollCallRepository() {
        const schoolRollCalls = await SchoolRollCall.findAll();
        return schoolRollCalls;
    }

    static async getSchoolRollCallByIdRepository(id: number) {
        const schoolRollCall = await SchoolRollCall.findOne({ where: { id: id } });
        return schoolRollCall;
    }

    static async postSchoolRollCallRepository(schoolRollCall: schoolRollCallType) {
        const newSchoolRollCall = await SchoolRollCall.create(schoolRollCall);
        return newSchoolRollCall;
    }


    static async patchSchoolRollCallRepository(id: number, schoolRollCall: schoolRollCallType) {
        const schoolRollCallFinded = await SchoolRollCall.findOne({ where: { id: id } });
        if (schoolRollCallFinded != null) {
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






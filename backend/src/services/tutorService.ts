import { TutorRepository as repository } from "../repositories/tutorRepository";
import { tutorType } from "../types/tutor";

export class TutorService {

    static async getTutorService(){
        const tutor = await repository.getTutorRepository();
        return tutor;
    }

    static async getTutorByIdService(id:number){
        const tutor = await repository.getTutorByIdRepository(id);
        return tutor;
    } 

    static async postTutorService(tutor: tutorType) {
         const newTutor = await repository.postTutorRepository(tutor);
        return newTutor;
    }

    static async patchTutorService(id:number, tutor:tutorType){
        const tutorUpdated = await repository.patchTutorRepository(id, tutor);
        return tutorUpdated;
    }

    static async deleteTutorService(id:number){
        const tutorDeleted = await repository.deleteTutorRepository(id);
        return tutorDeleted;
    }


}
import Tutor from '../models/tutor';
import { tutorType } from '../types/tutor';


export class TutorRepository {

    static async getTutorRepository() {
        const tutors = await Tutor.findAll();
        return tutors;
    }

    static async getTutorByIdRepository(id: number) {
        const tutor = await Tutor.findOne({ where: { id: id } });
        return tutor;
    }

    static async postTutorRepository(tutor: tutorType) {
        const newTutor = await Tutor.create(tutor);
        return newTutor;
    }


    static async patchTutorRepository(id: number, tutor: tutorType) {
        const tutorFinded = await Tutor.findOne({ where: { id: id } });
        if (tutorFinded != null) {
            await Tutor.update(tutor, { where: { id: id } })
            const tutorUpdated = await Tutor.findOne({ where: { id: id } });
            return tutorUpdated;
        } else {
            return tutorFinded;
        }

    }

    static async deleteTutorRepository(id: number) {
        const tutor = await Tutor.findOne({ where: { id: id } });
        if (tutor != null) {
            await Tutor.destroy({ where: { id: id } });
        } else {
            null;
        }
        return tutor;
    }
}






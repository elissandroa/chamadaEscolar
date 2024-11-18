import { GraduationRepository as repository } from "../repositories/graduationRepository";
import { graduationType } from "../types/graduation";

export class GraduationService {

    static async getGraduationsByName(name: string) {
        const graduations = await repository.getGraduationByNameRepository(name);
        return graduations;
    }

    static async getGraduationService() {
        const graduations = await repository.getGraduationRepository();
        return graduations;
    }

    static async getGraduationByIdService(id: number) {
        const graduation = await repository.getGraduationByIdRepository(id);
        return graduation;
    }

    static async postGraduationService(graduation: graduationType) {
        const newGraduation = await repository.postGraduationRepository(graduation);
        return newGraduation;
    }

    static async patchGraduationService(id: number, graduation: graduationType) {
        const graduationUpdated = await repository.patchGraduationRepository(id, graduation);
        return graduationUpdated;
    }

    static async deleteGraduationService(id: number) {
        const graduationDeleted = await repository.deleteGraduationRepository(id);
        return graduationDeleted;
    }


}
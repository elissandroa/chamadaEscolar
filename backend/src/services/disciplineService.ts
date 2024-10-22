import { DisciplineRepository as repository } from "../repositories/disciplineRepository";
import { disciplineType } from "../types/discipline";

export class DisciplineService {

    static async getDisciplineService(){
        const discipline = await repository.getDisciplineRepository();
        return discipline;
    }

    static async getDisciplineByIdService(id:number){
        const discipline = await repository.getDisciplineByIdRepository(id);
        return discipline;
    } 

    static async postDisciplineService(discipline: disciplineType) {
         const newDiscipline = await repository.postDisciplineRepository(discipline);
        return newDiscipline;
    }

    static async patchDisciplineService(id:number, discipline:disciplineType){
        const disciplineUpdated = await repository.patchDisciplineRepository(id, discipline);
        return disciplineUpdated;
    }

    static async deleteDisciplineService(id:number){
        const disciplineDeleted = await repository.deleteDisciplineRepository(id);
        return disciplineDeleted;
    }


}
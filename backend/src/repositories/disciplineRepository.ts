import Discipline from '../models/discipline';
import { disciplineType } from '../types/discipline';


export class DisciplineRepository {

    static async getDisciplineRepository() {
        const disciplines = await Discipline.findAll();
        return disciplines;
    }

    static async getDisciplineByIdRepository(id: number) {
        const discipline = await Discipline.findOne({ where: { id: id } });
        return discipline;
    }

    static async postDisciplineRepository(discipline: disciplineType) {
        const newDiscipline = await Discipline.create(discipline);
        return newDiscipline;
    }


    static async patchDisciplineRepository(id: number, discipline: disciplineType) {
        const disciplineFinded = await Discipline.findOne({ where: { id: id } });
        if (disciplineFinded != null) {
            await Discipline.update(discipline, { where: { id: id } })
            const disciplineUpdated = await Discipline.findOne({ where: { id: id } });
            return disciplineUpdated;
        } else {
            return disciplineFinded;
        }

    }

    static async deleteDisciplineRepository(id: number) {
        const discipline = await Discipline.findOne({ where: { id: id } });
        if (discipline != null) {
            await Discipline.destroy({ where: { id: id } });
        } else {
            null;
        }
        return discipline;
    }
}






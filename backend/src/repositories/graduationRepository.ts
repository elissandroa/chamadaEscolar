import { Op } from 'sequelize';
import Graduation from '../models/graduation';
import { graduationType } from '../types/graduation';


export class GraduationRepository {

    static async getGraduationByNameRepository(name: string) {
        const graduations = Graduation.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        })
        return graduations;
    }

    static async getGraduationRepository() {
        const graduations = await Graduation.findAll();
        return graduations;
    }

    static async getGraduationByIdRepository(id: number) {
        const graduation = await Graduation.findOne({ where: { id: id } });
        return graduation;
    }

    static async postGraduationRepository(graduation: graduationType) {
        const newGraduation = await Graduation.create(graduation);
        return newGraduation;
    }


    static async patchGraduationRepository(id: number, graduation: graduationType) {
        const graduationFinded = await Graduation.findOne({ where: { id: id } });
        if (graduationFinded != null) {
            await Graduation.update(graduation, { where: { id: id } })
            const graduationUpdated = await Graduation.findOne({ where: { id: id } });
            return graduationUpdated;
        } else {
            return graduationFinded;
        }

    }

    static async deleteGraduationRepository(id: number) {
        const graduation = await Graduation.findOne({ where: { id: id } });
        if (graduation != null) {
            await Graduation.destroy({ where: { id: id } });
        } else {
            null;
        }
        return graduation;
    }
}






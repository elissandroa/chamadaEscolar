import { DisciplineService as service } from "../services/disciplineService";
import { disciplineType } from "../types/discipline";
import { Request, Response } from "express";


export class DisciplineController {

    static async getDisciplineController(req: Request, res: Response) {
        const discipline = await service.getDisciplineService();
        if (discipline !== null) {
            res.status(200).json(discipline);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }

    }

    static async getDisciplineByIdController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const discipline = await service.getDisciplineByIdService(id);
        if (discipline !== null) {
            res.status(200).json(discipline);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }
    }

    static async postDisciplineController(req: Request, res: Response) {
        const discipline: disciplineType = {
            name: req.body.name
        }

        const newDiscipline = await service.postDisciplineService(discipline);

        res.status(200).json(newDiscipline);

    }

    static async patchDisciplineController(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        const discipline: disciplineType = {
            name: req.body.name
        }

        const disciplineUpdated = await service.patchDisciplineService(id, discipline)

        if (disciplineUpdated !== null) {
            res.status(200).json(disciplineUpdated);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }

    }

    static async deleteDisciplineController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const disciplineDelete = await service.deleteDisciplineService(id);

        if (disciplineDelete !== null) {
            res.status(200).json({ message: "Deletado com sucesso!" });
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }
    }

}
import { GraduationService as service } from "../services/graduationService";
import { graduationType } from "../types/graduation";
import { Request, Response } from "express";


export class GraduationController {

    static async getGraduationsByNameController(req: Request, res: Response) {
        const { name } = req.query;
        const graduations = await service.getGraduationsByName(String(name));
        if (graduations.length > 0) {
            res.status(200).json(graduations);
        } else {
            res.status(404).json({ message: "Registro não econtrado!" });
            return;
        }
    }

    static async getGraduationController(req: Request, res: Response) {
        const graduations = await service.getGraduationService();
        if (graduations !== null) {
            res.status(200).json(graduations);
        } else {
            res.status(404).json({ message: "Registro não econtrado!" });
        }

    }

    static async getGraduationByIdController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const graduation = await service.getGraduationByIdService(id);
        if (graduation !== null) {
            res.status(200).json(graduation);
        } else {
            res.status(404).json({ message: "Registro não econtrado!" });
        }
    }

    static async postGraduationController(req: Request, res: Response) {
        const graduation: graduationType = {
            name: req.body.name,
        }

        const newGraduation = await service.postGraduationService(graduation);

        res.status(200).json(newGraduation);

    }

    static async patchGraduationController(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        const graduation: graduationType = {
            name: req.body.name,
        }

        const graduationUpdated = await service.patchGraduationService(id, graduation)

        if (graduationUpdated !== null) {
            res.status(200).json(graduationUpdated);
        } else {
            res.status(404).json({ message: "Registro não econtrado!" });
        }

    }

    static async deleteGraduationController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const graduationDeleted = await service.deleteGraduationService(id);

        if (graduationDeleted !== null) {
            res.status(200).json({ message: "Deletado com sucesso!" });
        } else {
            res.status(404).json({ message: "Registro não econtrado!" });
        }
    }

}
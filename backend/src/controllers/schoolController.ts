import { SchoolService as service } from "../services/schoolService";
import { schoolType } from "../types/school";
import { Request, Response } from "express";


export class SchoolController {

    static async getSchoolController(req: Request, res: Response) {
        const school = await service.getSchoolService();
        if (school !== null) {
            res.status(200).json(school);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }

    }

    static async getSchoolByIdController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const school = await service.getSchoolByIdService(id);
        if (school !== null) {
            res.status(200).json(school);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }
    }

    static async postSchoolController(req: Request, res: Response) {
        const school: schoolType = {
            name: req.body.name,
            Addresses: req.body.Addresses
        }

        const newSchool = await service.postSchoolService(school);

        res.status(200).json(newSchool);

    }

    static async patchSchoolController(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        const school: schoolType = {
            name: req.body.name,
            Addresses: req.body.Addresses
        }

        const schoolUpdated = await service.patchSchoolService(id, school)

        if (schoolUpdated !== null) {
            res.status(200).json(schoolUpdated);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }

    }

    static async deleteSchoolController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const schoolDelete = await service.deleteSchoolService(id);

        if (schoolDelete !== null) {
            res.status(200).json({ message: "Deletado com sucesso!" });
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }
    }

}
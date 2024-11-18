import { SchoolService as service } from "../services/schoolService";
import { schoolType } from "../types/school";
import { Request, Response } from "express";


export class SchoolController {

    static async getSchoolsByNameController(req: Request, res: Response) {
        const { name } = req.query;
        const schools = await service.getShcoolsByNameService(String(name));

        if (schools.length > 0) {
            res.status(200).json(schools);
        } else {
            res.status(404).json({ message: "Registro não encontrado!" });
        }
    }

    static async getSchoolController(req: Request, res: Response) {
        const school = await service.getSchoolService();
        if (school !== null) {
            res.status(200).json(school);
        } else {
            res.status(404).json({ message: "Registro não encontrado!" });
        }

    }

    static async getSchoolByIdController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const school = await service.getSchoolByIdService(id);
        if (school !== null) {
            res.status(200).json(school);
        } else {
            res.status(404).json({ message: "Registro não encontrado!" });
        }
    }

    static async postSchoolController(req: Request, res: Response) {
        const school: schoolType = {
            name: req.body.name,
            Addresses: req.body.Addresses,
            phone: req.body.phone
        }

        const newSchool = await service.postSchoolService(school);

        res.status(200).json(newSchool);

    }

    static async patchSchoolController(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        const school: schoolType = {
            name: req.body.name,
            Addresses: req.body.Addresses,
            phone: req.body.phone
        }

        const schoolUpdated = await service.patchSchoolService(id, school)

        if (schoolUpdated !== null) {
            res.status(200).json(schoolUpdated);
        } else {
            res.status(404).json({ message: "Registro não encontrado!" });
        }

    }

    static async deleteSchoolController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const schoolDelete = await service.deleteSchoolService(id);

        if (schoolDelete !== null) {
            res.status(200).json({ message: "Deletado com sucesso!" });
        } else {
            res.status(404).json({ message: "Registro não encontrado!" });
        }
    }

}
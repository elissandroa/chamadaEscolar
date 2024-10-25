import { SchoolTestService as service } from "../services/schoolTestService";
import { schoolTestType } from "../types/schooltest";
import { Request, Response } from "express";


export class SchoolTestController {

    static async getSchoolTestController(req: Request, res: Response) {
        const schoolTests = await service.getSchoolTestService();
        if (schoolTests !== null) {
            res.status(200).json(schoolTests);
        } else {
            res.status(404).json({ message: "Registro não econtrado!" });
        }

    }

    static async getSchoolTestByIdController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const schoolTest = await service.getSchoolTestByIdService(id);
        if (schoolTest !== null) {
            res.status(200).json(schoolTest);
        } else {
            res.status(404).json({ message: "Registro não econtrado!" });
        }
    }

    static async postSchoolTestController(req: Request, res: Response) {
        const schoolTest: schoolTestType = {
            name: req.body.name,
            description: req.body.description,
            grade: req.body.grade,
            StudentId: req.body.StudentId
        }

        const newSchoolTest = await service.postSchoolTestService(schoolTest);

        res.status(200).json(newSchoolTest);

    }

    static async patchSchoolTestController(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        const schoolTest: schoolTestType = {
            name: req.body.name,
            description: req.body.description,
            grade: req.body.grade,
            StudentId: req.body.StudentId
        }

        const schoolTestUpdated = await service.patchSchoolTestService(id, schoolTest)

        if (schoolTestUpdated !== null) {
            res.status(200).json(schoolTestUpdated);
        } else {
            res.status(404).json({ message: "Registro não econtrado!" });
        }

    }

    static async deleteSchoolTestController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const schoolTestDeleted = await service.deleteSchoolTestService(id);

        if (schoolTestDeleted !== null) {
            res.status(200).json({ message: "Deletado com sucesso!" });
        } else {
            res.status(404).json({ message: "Registro não econtrado!" });
        }
    }

}
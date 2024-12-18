import { SchoolRollCallService as service } from "../services/schoolRollCallService";
import { schoolRollCallType } from "../types/schoolRollCall";
import { Request, Response } from "express";


export class SchoolRollCallController {

    static async getSchoolRollCallController(req: Request, res: Response) {
        const schoolRollCall = await service.getSchoolRollCallService();
        if (schoolRollCall !== null) {
            res.status(200).json(schoolRollCall);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }

    }

    static async getSchoolRollCallByIdController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const schoolRollCall = await service.getSchoolRollCallByIdService(id);
        if (schoolRollCall !== null) {
            res.status(200).json(schoolRollCall);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }
    }

    static async postSchoolRollCallController(req: Request, res: Response) {
        const schoolRollCall: schoolRollCallType = {
            schoolRollCallDate: req.body.schoolRollCallDate,
            ClassRoomId: req.body.ClassRoomId,
            DisciplineId: req.body.DisciplineId,
            TeacherId: req.body.TeacherId,
            medicalCertificate: req.body.medicalCertificate
        }

        const newSchoolRollCall = await service.postSchoolRollCallService(schoolRollCall);

        res.status(200).json(newSchoolRollCall);

    }

    static async patchSchoolRollCallController(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        const schoolRollCall: schoolRollCallType = {
            schoolRollCallDate: req.body.schoolRollCallDate,
            DisciplineId: req.body.DisciplineId,
            ClassRoomId: req.body.ClassRoomId,
            TeacherId: req.body.TeacherId,
            Students: req.body.Students,
            medicalCertificate: req.body.medicalCertificate
        }

        const schoolRollCallUpdated = await service.patchSchoolRollCallService(id, schoolRollCall)

        if (schoolRollCallUpdated !== null) {
            res.status(200).json(schoolRollCallUpdated);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }

    }

    static async deleteSchoolRollCallController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const schoolRollCallDelete = await service.deleteSchoolRollCallService(id);

        if (schoolRollCallDelete !== null) {
            res.status(200).json({ message: "Deletado com sucesso!" });
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }
    }

}
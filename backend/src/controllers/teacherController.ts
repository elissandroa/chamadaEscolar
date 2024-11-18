import { TeacherService as service } from "../services/teacherService";
import { teacherType } from "../types/teacher";
import { Request, Response } from "express";


export class TeacherController {


    static async getTeachersByNameController(req: Request, res: Response) {
        const { name } = req.query;
        const teachers = await service.getTeachersByNameService(String(name));

        if (teachers.length > 0) {
            res.status(200).json(teachers);
        } else {
            res.status(404).json({ message: "Registros não encontrados!" });
        }

    }

    static async getTeacherController(req: Request, res: Response) {
        const teacher = await service.getTeacherService();
        if (teacher !== null) {
            res.status(200).json(teacher);
        } else {
            res.status(404).json({ message: "Registro não encontrado!" });
        }

    }

    static async getTeacherByIdController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const teacher = await service.getTeacherByIdService(id);
        if (teacher !== null) {
            res.status(200).json(teacher);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }
    }

    static async postTeacherController(req: Request, res: Response) {
        const teacher: teacherType = {
            name: req.body.name,
            phone: req.body.phone,
            Addresses: req.body.Addresses,
            Disciplines: req.body.Disciplines
        }

        const newTeacher = await service.postTeacherService(teacher);

        res.status(200).json(newTeacher);

    }

    static async patchTeacherController(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        const teacher: teacherType = {
            name: req.body.name,
            phone: req.body.phone,
            Addresses: req.body.Addresses,
            Disciplines: req.body.Disciplines
        }

        const teacherUpdated = await service.patchTeacherService(id, teacher)

        if (teacherUpdated !== null) {
            res.status(200).json(teacherUpdated);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }

    }

    static async deleteTeacherController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const teacherDelete = await service.deleteTeacherService(id);

        if (teacherDelete !== null) {
            res.status(200).json({ message: "Deletado com sucesso!" });
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }
    }

}
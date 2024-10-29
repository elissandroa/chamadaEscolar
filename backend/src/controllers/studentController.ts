import { StudentService as service } from "../services/studentService";
import { studentType } from "../types/student";
import { Request, Response } from "express";


export class StudentController {

    static async getStudentController(req: Request, res: Response) {
        const student = await service.getStudentService();
        if (student !== null) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }

    }

    static async getStudentByIdController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const student = await service.getStudentByIdService(id);
        if (student !== null) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }
    }

    static async postStudentController(req: Request, res: Response) {
        const student: studentType = {
            name: req.body.name,
            InstrumentId: req.body.InstrumentId,
            GraduationId: req.body.GraduationId,
            phone: req.body.phone,
            Addresses: req.body.Addresses
        }

        const newStudent = await service.postStudentService(student);

        res.status(200).json(newStudent);

    }

    static async patchStudentController(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        const student: studentType = {
            name: req.body.name,
            InstrumentId: req.body.InstrumentId,
            GraduationId: req.body.GraduationId,
            phone: req.body.phone,
            Addresses: req.body.Addresses
        }

        const studentUpdated = await service.patchStudentService(id, student)

        if (studentUpdated !== null) {
            res.status(200).json(studentUpdated);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }

    }

    static async deleteStudentController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const studentDelete = await service.deleteStudentService(id);

        if (studentDelete !== null) {
            res.status(200).json({ message: "Deletado com sucesso!" });
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }
    }

}
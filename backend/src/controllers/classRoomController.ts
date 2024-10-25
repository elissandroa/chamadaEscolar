import { ClassRoomService as service } from "../services/classRoomService";
import { classRoomType } from "../types/classRoom";
import { Request, Response } from "express";


export class ClassRoomController {

    static async getClassRoomController(req: Request, res: Response) {
        const classRoom = await service.getClassRoomService();
        if (classRoom !== null) {
            res.status(200).json(classRoom);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }

    }

    static async getClassRoomByIdController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const classRoom = await service.getClassRoomByIdService(id);
        if (classRoom !== null) {
            res.status(200).json(classRoom);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }
    }

    static async postClassRoomController(req: Request, res: Response) {
        const classRoom: classRoomType = {
            name: req.body.name,
            SchoolId: req.body.SchoolId,
            SchoolRollCallId: req.body.SchoolRollCallId,
            Students: req.body.Students
        }

        if(!req.body.SchoolRollCallId) {
            delete classRoom.SchoolRollCallId;
        }


        const newClassRoom = await service.postClassRoomService(classRoom);

        res.status(200).json(newClassRoom);

    }

    static async patchClassRoomController(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        const classRoom: classRoomType = {
            name: req.body.name,
            SchoolId : req.body.SchoolId,
            SchoolRollCallId: req.body.SchoolRollCallId,
            Students: req.body.Students
        }

        if(!req.body.SchoolRollCallId) {
            delete classRoom.SchoolRollCallId;
        }


        const classRoomUpdated = await service.patchClassRoomService(id, classRoom)

        if (classRoomUpdated !== null) {
            res.status(200).json(classRoomUpdated);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }

    }

    static async deleteClassRoomController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const classRoomDelete = await service.deleteClassRoomService(id);

        if (classRoomDelete !== null) {
            res.status(200).json({ message: "Deletado com sucesso!" });
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }
    }

}
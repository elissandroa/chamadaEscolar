import { TutorService as service } from "../services/tutorService";
import { tutorType } from "../types/tutor";
import { Request, Response } from "express";


export class TutorController {

    static async getTutorController(req: Request, res: Response) {
        const tutor = await service.getTutorService();
        if (tutor !== null) {
            res.status(200).json(tutor);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }

    }

    static async getTutorByIdController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const tutor = await service.getTutorByIdService(id);
        if (tutor !== null) {
            res.status(200).json(tutor);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }
    }

    static async postTutorController(req: Request, res: Response) {
        const tutor: tutorType = {
            name: req.body.name
        }

        const newTutor = await service.postTutorService(tutor);

        res.status(200).json(newTutor);

    }

    static async patchTutorController(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        const tutor: tutorType = {
            name: req.body.name
        }

        const tutorUpdated = await service.patchTutorService(id, tutor)

        if (tutorUpdated !== null) {
            res.status(200).json(tutorUpdated);
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }

    }

    static async deleteTutorController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const tutorDelete = await service.deleteTutorService(id);

        if (tutorDelete !== null) {
            res.status(200).json({ message: "Deletado com sucesso!" });
        } else {
            res.status(404).json({ message: "Registro não encontrada!" });
        }
    }

}
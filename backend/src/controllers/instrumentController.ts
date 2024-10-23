import { InstrumentService as service } from "../services/instrumentService";
import { instrumentType } from "../types/instrument";
import { Request, Response } from "express";


export class InstrumentController {

    static async getInstrumentController(req: Request, res: Response) {
        const instruments = await service.getInstrumentService();
        if (instruments !== null) {
            res.status(200).json(instruments);
        } else {
            res.status(404).json({ message: "Registro não econtrado!" });
        }

    }

    static async getInstrumentByIdController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const instrument = await service.getInstrumentByIdService(id);
        if (instrument !== null) {
            res.status(200).json(instrument);
        } else {
            res.status(404).json({ message: "Registro não econtrado!" });
        }
    }

    static async postInstrumentController(req: Request, res: Response) {
        const instrument: instrumentType = {
            name: req.body.name,
        }

        const newInstrument = await service.postInstrumentService(instrument);

        res.status(200).json(newInstrument);

    }

    static async patchInstrumentController(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        const instrument: instrumentType = {
            name: req.body.name,
        }

        const instrumentUpdated = await service.patchInstrumentService(id, instrument)

        if (instrumentUpdated !== null) {
            res.status(200).json(instrumentUpdated);
        } else {
            res.status(404).json({ message: "Registro não econtrado!" });
        }

    }

    static async deleteInstrumentController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const instrumentDeleted = await service.deleteInstrumentService(id);

        if (instrumentDeleted !== null) {
            res.status(200).json({ message: "Deletado com sucesso!" });
        } else {
            res.status(404).json({ message: "Registro não econtrado!" });
        }
    }

}
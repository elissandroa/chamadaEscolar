import { InstrumentRepository as repository } from "../repositories/instrumentRepository";
import { instrumentType } from "../types/instrument";

export class InstrumentService {

    static async getInstrumentsByNameService(name:string){
        const instruments = await repository.getInstrumentByNameRepository(name);
        return instruments;
    }

    static async getInstrumentService(){
        const instruments = await repository.getInstrumentRepository();
        return instruments;
    }

    static async getInstrumentByIdService(id:number){
        const instrument = await repository.getInstrumentByIdRepository(id);
        return instrument;
    } 

    static async postInstrumentService(instrument: instrumentType) {
        const newInstrument = await repository.postInstrumentRepository(instrument);
        return newInstrument;
    }

    static async patchInstrumentService(id:number, instrument:instrumentType){
        const instrumentUpdated = await repository.patchInstrumentRepository(id, instrument);
        return instrumentUpdated;
    }

    static async deleteInstrumentService(id:number){
        const instrumentDeleted = await repository.deleteInstrumentRepository(id);
        return instrumentDeleted;
    }


}
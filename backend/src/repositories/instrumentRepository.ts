import { Op } from 'sequelize';
import Instrument from '../models/instrument';
import { instrumentType } from '../types/instrument';


export class InstrumentRepository {

    static async getInstrumentByNameRepository(name: string) {
        const instruments = await Instrument.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        })
        return instruments;
    }

    static async getInstrumentRepository() {
        const instruments = await Instrument.findAll();
        return instruments;
    }

    static async getInstrumentByIdRepository(id: number) {
        const instrument = await Instrument.findOne({ where: { id: id } });
        return instrument;
    }

    static async postInstrumentRepository(instrument: instrumentType) {
        const newInstrument = await Instrument.create(instrument);
        return newInstrument;
    }


    static async patchInstrumentRepository(id: number, instrument: instrumentType) {
        const instrumentFinded = await Instrument.findOne({ where: { id: id } });
        if (instrumentFinded != null) {
            await Instrument.update(instrument, { where: { id: id } })
            const instrumentUpdated = await Instrument.findOne({ where: { id: id } });
            return instrumentUpdated;
        } else {
            return instrumentFinded;
        }

    }

    static async deleteInstrumentRepository(id: number) {
        const instrument = await Instrument.findOne({ where: { id: id } });
        if (instrument != null) {
            await Instrument.destroy({ where: { id: id } });
        } else {
            null;
        }
        return instrument;
    }
}






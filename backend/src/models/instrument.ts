import { DataTypes } from "sequelize";
import db from '../db/conn';

const Instrument = db.define('Instrument', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


export default Instrument;
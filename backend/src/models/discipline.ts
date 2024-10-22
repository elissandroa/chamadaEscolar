import { DataTypes } from "sequelize";
import db from '../db/conn';

const Discipline = db.define('Discipline', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


export default Discipline;
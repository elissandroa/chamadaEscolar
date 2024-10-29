import { DataTypes } from "sequelize";
import db from '../db/conn';

const Graduation = db.define('Graduation', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})


export default Graduation;
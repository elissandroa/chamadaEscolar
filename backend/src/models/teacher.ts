import { DataTypes } from "sequelize";
import db from '../db/conn';


const Teacher = db.define('Teacher', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})




export default Teacher;
import { DataTypes } from "sequelize";
import db from '../db/conn';


const Student = db.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})




export default Student;
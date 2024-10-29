import { DataTypes } from "sequelize";
import db from '../db/conn';
import Discipline from "./discipline";

const SchoolRollCallsStudents = db.define('SchoolRollCallsStudents', {
    presence: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
})


export default SchoolRollCallsStudents;
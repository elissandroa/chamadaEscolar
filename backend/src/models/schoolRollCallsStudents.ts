import { DataTypes } from "sequelize";
import db from '../db/conn';
import Discipline from "./discipline";
import { Certificate } from "crypto";

const SchoolRollCallsStudents = db.define('SchoolRollCallsStudents', {
    presence: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    medicalCertificate: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
    
})


export default SchoolRollCallsStudents;
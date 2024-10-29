import { DataTypes } from "sequelize";
import db from '../db/conn';
import schoolRollCallsStudents from "./schoolRollCallsStudents";
import Student from "./student";


const SchoolRollCall = db.define('SchoolRollCall', {
    schoolRollCallDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    DisciplineId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    TeacherId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

SchoolRollCall.belongsToMany(Student, {
    through: {
        model: schoolRollCallsStudents
    },
    constraints: true
})

Student.belongsToMany(SchoolRollCall, {
    through: {
        model: schoolRollCallsStudents
    },
    constraints: true
})



export default SchoolRollCall;
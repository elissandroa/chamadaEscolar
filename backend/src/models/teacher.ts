import { DataTypes } from "sequelize";
import db from '../db/conn';
import Address from "./address";
import Discipline from "./discipline";
import TeachersDisciplines from "./teachersDisciplines";
import TeachersAddresses from "./teachersAddresses";

const Teacher = db.define('Teacher', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone : {
        type: DataTypes.STRING,
        allowNull: true
    }
})

Teacher.belongsToMany(Discipline, {
    through: {
        model: TeachersDisciplines
    },
    constraints: true
})

Discipline.belongsToMany(Teacher, {
    through: {
        model: TeachersDisciplines
    },
    constraints: true
})


Teacher.belongsToMany(Address, {
    through: {
        model: TeachersAddresses
    },
    constraints: true
})


Address.belongsToMany(Teacher, {
    through: {
        model: TeachersAddresses
    },
    constraints: true
})




export default Teacher;
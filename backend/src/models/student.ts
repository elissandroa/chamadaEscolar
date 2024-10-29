import { DataTypes } from "sequelize";
import db from '../db/conn';
import Instrument from "./instrument";
import Tutor from "./tutor";
import SchoolTest from "./schooltest";
import Address from "./address";
import ClassRoom from "./classRoom";
import StudentsTutors from "./studentsTutors";
import StudentsAddresses from "./studentsAddresses";
import Graduation from "./graduation";

const Student = db.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    }
})


Student.belongsTo(Instrument, {
    constraints: true
})

Student.belongsTo(Graduation, {
    constraints: true
})

Student.hasMany(SchoolTest, {
    constraints: true
})


Student.belongsToMany(Tutor, {
    through: {
        model: StudentsTutors
    },
    constraints: true

})

Tutor.belongsToMany(Student, {
    through: {
        model: StudentsTutors
    },
    constraints: true

})


Student.belongsToMany(Address, {
    through: {
        model: StudentsAddresses
    },
    constraints: true
})

Address.belongsToMany(Student, {
    through: {
        model: StudentsAddresses
    },
    constraints: true
})




export default Student
import { DataTypes } from "sequelize";
import db from '../db/conn';
import Student from "./student";
import ClassRoomStudents from "./classRoomStudents";

const ClassRoom = db.define('ClassRoom', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

ClassRoom.belongsToMany(Student, {
    through: {
        model: ClassRoomStudents
    }, 
    constraints: true
});

Student.belongsToMany(ClassRoom, {
    through: {
        model: ClassRoomStudents
    },
    constraints:true
})

export default ClassRoom;
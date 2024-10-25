import { DataTypes } from "sequelize";
import db from '../db/conn';
import ClassRoom from "./classRoom";
import schoolRollCallsClassRooms from "./schoolRollCallsClassRooms";

const SchoolRollCall = db.define('SchoolRollCall', {
    presence: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

SchoolRollCall.belongsToMany(ClassRoom , {
    through: {
        model: schoolRollCallsClassRooms
    }, 
    constraints: true
})

ClassRoom.belongsTo(SchoolRollCall);


export default SchoolRollCall;
import { BOOLEAN, DataTypes } from "sequelize";
import db from '../db/conn';

const schoolRollCallsClassRooms = db.define('schoolRollCallsClassRooms', {
    presence: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    }
})


export default schoolRollCallsClassRooms;
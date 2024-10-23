import { DataTypes } from "sequelize";
import db from '../db/conn';


const ClassRoom = db.define('ClassRoom', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})




export default ClassRoom;
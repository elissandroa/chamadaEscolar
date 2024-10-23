import { DataTypes } from "sequelize";
import db from '../db/conn';


const SchoolRollCall = db.define('SchoolRollCall', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})




export default SchoolRollCall;
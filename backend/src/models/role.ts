import { DataTypes } from "sequelize";
import db from '../db/conn';


const Role = db.define('Role', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})




export default Role;
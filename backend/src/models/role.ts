import { DataTypes } from "sequelize";
import db from '../db/conn';


const Role = db.define('Role', {
    authority: {
        type: DataTypes.STRING,
        allowNull: false
    }
})




export default Role;
import { DataTypes } from "sequelize";
import db from '../db/conn';


const School = db.define('School', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})




export default School;
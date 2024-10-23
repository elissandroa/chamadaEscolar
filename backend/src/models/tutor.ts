import { DataTypes } from "sequelize";
import db from '../db/conn';


const Tutor = db.define('Tutor', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})




export default Tutor;
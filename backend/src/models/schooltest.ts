import { DataTypes } from "sequelize";
import db from '../db/conn';

const SchoolTest = db.define('SchoolTest', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description:  {
        type: DataTypes.TEXT,
        allowNull: false
    },
    grade: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})


export default SchoolTest;
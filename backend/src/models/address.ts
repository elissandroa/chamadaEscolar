import { DataTypes } from "sequelize";
import db from '../db/conn';
import Student from "./student";
Student

const Address = db.define('Address', {
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    num: {
        type: DataTypes.STRING,
        allowNull: false
    },
    neighborhood: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zipcode: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Address;
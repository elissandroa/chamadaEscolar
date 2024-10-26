import { DataTypes } from "sequelize";
import db from '../db/conn';
import Address from "./address";
import ClassRoom from "./classRoom";
import SchoolsAddresses from "./schoolAddresses";


const School = db.define('School', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

School.belongsToMany(Address, {
    through: {
        model: SchoolsAddresses
    },
    constraints: true
})

Address.belongsToMany(School, {
    through: {
        model: SchoolsAddresses
    },
    constraints: true
})


export default School;
import { DataTypes } from "sequelize";
import db from '../db/conn';
import Address from "./address";   
import TutorsAddresses from "./tutorsAddresses";


const Tutor = db.define('Tutor', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Tutor.belongsToMany(Address, {
    through: {
        model: TutorsAddresses
    },
    constraints: true
})

Address.belongsToMany(Tutor, {
    through: {
        model: TutorsAddresses
    },
    constraints: true
})



export default Tutor;
import { DataTypes } from "sequelize";
import db from '../db/conn';
import Role from "./role";

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Role.hasMany(User);
User.belongsTo(Role);

export default User;
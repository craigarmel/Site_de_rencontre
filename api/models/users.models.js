import { DataTypes } from "sequelize"

export const CreateUserModel = (sequelize) => {
    const User = sequelize.define('User', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            islowercase: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false      
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        interested_by: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    return User
}
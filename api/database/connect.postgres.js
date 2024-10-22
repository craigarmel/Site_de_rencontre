import pg from 'pg'
import dotenv from 'dotenv'
import Sequelize from 'sequelize'
import { CreateUserModel } from '../models/users.models.js'

dotenv.config()

let UserModel = null
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  })

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.')
        UserModel = await CreateUserModel(sequelize)
        await sequelize.sync()
        console.log('All models were synchronized successfully.')
      } catch (error) {
        console.error('Unable to connect to the database:', error)
      }
}

export {connect, UserModel}
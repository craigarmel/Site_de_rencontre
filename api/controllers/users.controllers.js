import { UserModel } from "../database/connect.postgres.js"

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll()
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const addUser = async (req, res) => {
    const {userId, username, email, password, gender, interested_by} = req.body
    try {
        const user = await UserModel.findOne({where: {userId: userId}})
        if (user==null) {
            await UserModel.create(req.body)
            return res.status(201).json({message: "User created successfully"})
        }
        return res.status(200).json({message: "User already exists"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateUser = async (req, res) => {
    let userId = req.params.userId
    try {
        const user = await UserModel.update(res.body,{where: {userId: userId}})
        return res.status(200).json("Updated successfully")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteUser = async (req, res) => {
    let userId = req.params.userId
    try {
        const user = await UserModel.destroy({where: {userId: userId}})
        return res.status(200).json("Deleted successfully")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
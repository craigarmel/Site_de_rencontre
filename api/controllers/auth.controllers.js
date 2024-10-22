import users from './database/users.json'

export const getAllUserss = (req, res) => {
    res.json(users)
}
import express from "express"
import {getAllUsers, addUser, updateUser, deleteUser} from "../controllers/users.controllers.js"

const router = express.Router()

router.get('/getAll', getAllUsers)
router.post('/add', addUser)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

export default router
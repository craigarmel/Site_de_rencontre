import express from 'express'
import {register, login} from '../controllers/auth.controllers.js'

const router = express.Router()

router.get('/Se_connecter', (req, res) => {
    res.render('./pages/Vitrine/Se_connecter.ejs')
})

router.get('/Creer_un_compte', (req, res) => {
    res.render('./pages/Vitrine/Creer_un_compte.ejs')
})

router.post('/Creer_un_compte', register)

router.post('/Se_connecter', login)

//router.get('/signout', signout)

export default router
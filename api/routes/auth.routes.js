import express, { Router } from 'express'
import {register, login} from '../controllers/auth.controllers.js'

const router = express.Router()

router.get('/Se_connecter', (req, res) => {
    res.render('./pages/Vitrine/Se_connecter.ejs')
})

router.get('/Connexion', (req, res) => {
    res.render('./pages/Vitrine/Connexion.ejs')
})

router.get('/Creer_un_compte', (req, res) => {
    res.render('./pages/Vitrine/Creer_un_compte.ejs')
})

router.post('/Creer_un_compte', register)

router.post('/Se_connecter', login)

router
//router.get('/signout', signout)

export default router
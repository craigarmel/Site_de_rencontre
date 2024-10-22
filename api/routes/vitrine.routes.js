import express from 'express'

const router = express.Router()

router.get('/A_propos', (req, res) => {
    res.render('./pages/Vitrine/A_propos.ejs')
})

router.get('/Contact', (req, res) => {
    res.render('./pages/Vitrine/Contact.ejs')
})

router.get('/Creer_un_compte', (req, res) => {
    res.render('./pages/Vitrine/Creer_un_compte.ejs')
})

router.get('/Nos_services', (req, res) => {
    res.render('./pages/Vitrine/Nos_services.ejs')
})

router.get('/Se_connecter', (req, res) => {
    res.render('./pages/Vitrine/Se_connecter.ejs')
})

export default router
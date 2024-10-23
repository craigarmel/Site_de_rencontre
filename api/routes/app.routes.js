import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.render('./pages/app/Main.ejs')
})

router.get('/Messagerie', (req, res) => {
    res.render('./pages/app/Messagerie.ejs')
})

router.get('/Likes', (req, res) => {
    res.render('./pages/app/Like.ejs')
})

router.get('/Profil', (req, res) => {
    res.render('./pages/app/Profil.ejs')
})

router.get('/Abonnement', (req, res) => {
    res.render('./pages/app/Abonnement.ejs')
})

export default router
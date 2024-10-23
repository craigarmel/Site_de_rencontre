import {sequelize, UserModel} from "../database/connect.postgres.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const register = async (req, res) => {
    const { username, email, password, confirmPassword, gender, interestedBy } = await req.body
    console.log(req.body)
    try {
        // Utilisation de Sequelize ORM pour vérifier si l'utilisateur existe déjà
        const existingUser = await UserModel.findOne({ where: { email } });
    
        if (existingUser) {
          return res.render('pages/Vitrine/Creer_un_compte', {
            message: 'User already exists',
          });
        }
    
        // Vérifier si les mots de passe correspondent
        if (password !== confirmPassword) {
          return res.render('pages/Vitrine/Creer_un_compte',{
            message: 'Passwords do not match',
          })
        }

        let hashedPassword = await bcrypt.hash(password, 8)

        const newUser = await UserModel.create({
            username,
            gender,
            interestedBy,
            email,
            password: hashedPassword,
            confirmPassword,
          })
        
        return res.status(201).render('index', { message: 'User created successfully' })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserModel.findOne({ where: { email } })
        if (!user) {
            return await res.render('pages/Vitrine/Se_connecter', {
                message: 'User not found'
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return await res.render('pages/Vitrine/Se_connecter',{
                message: 'Incorrect password',
            })
        }

        const token = jwt.sign({ id: user.id, email: user.email }, 'JWT_SECRET', {
            expiresIn: '1h' // Durée de validité du token
        })
    
        // Stocker le token dans un cookie sécurisé
        res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        maxAge: 3600000 
        })

        res.redirect('/')
        
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
}
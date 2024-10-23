import express from 'express'
import authRoutes from './routes/auth.routes.js'
import usersRoutes from './routes/users.routes.js'
import vitrineRoutes from './routes/vitrine.routes.js'
import appRoutes from './routes/app.routes.js'
import path from 'path'
import fs from 'fs'
import {connect} from './database/connect.postgres.js'
import { fileURLToPath } from 'url'
import bp from 'body-parser'
import cookieParser from 'cookie-parser'

const app = express()
const port = 3000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(cookieParser())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use('/auth',authRoutes)
app.use('/users',usersRoutes)
app.use('/',vitrineRoutes)
app.use('/app',appRoutes)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`)
})

connect()
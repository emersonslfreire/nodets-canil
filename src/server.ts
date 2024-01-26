import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import mustche from 'mustache-express'
import mainRoutes from './routes/index'

dotenv.config();

const server = express()

server.set('view engine ', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache' , mustche())

server.use(express.static(path.join(__dirname , '../public')))

// Rotas

server.use(mainRoutes)

server.use((req, res)=>{
    res.send('Pagina não encontrada')
})

server.listen(process.env.PORT)


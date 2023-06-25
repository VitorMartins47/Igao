const express = require ('express')
const path = require('path')
//Controller
const CarroController = require('./controllers/CarroController')
const HomeController = require('./controllers/HomeController')
const Carro = require('./models/Carro')
//Serviço
const app = express()
app.listen(8000, () => {
    console.log("Rodando em http://localhost:8000")
})
app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname,'views'))
app.use(express.urlencoded({
    extended: true
}));
//rotas
app.get('/',HomeController.home)
app.get('/carros', CarroController.list)
app.get('/carros/form', CarroController.form)
app.post('/carros/create',CarroController.create)

//busca, delete, edit

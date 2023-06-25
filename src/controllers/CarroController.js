const Carro = require('../models/Carro')

module.exports ={
    create: async (req,res) =>{
        await Carro.create(req.body)
        return res.redirect('/carros')
    } ,
    list:   (_,res)=> {
        const carros = []
        //carregar produtos
        return res.render('carro/list')
    },
    form:   (_,res)=> res.render('carro/form'),
}
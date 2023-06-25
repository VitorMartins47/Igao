const Carro = require('../models/Carro')

module.exports ={
    create: async (req,res) =>{
        await Carro.create(req.body)
        return res.redirect('/carros')
    } ,
    list: async  (_,res)=> {
        const carros = await Carro.findAll()
        return res.render('carro/list',{carros})
    },
    form:   (_,res)=> res.render('carro/form'),
}
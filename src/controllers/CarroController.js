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

    edit: async(req, res) => {
        const body = req.body;
        const carros =  await Carro.findByPk(body.id);
        carros.update({
            modelo: body.Modelo,
            marca: body.Marca,
            valor: body.Valor
        })
        carros.save()
        return res.redirect('/carros/list')
    },
    destroy: async(req, res) => {
        const id = req.params.id;
        Carro.destroy({
            where: {id: id}
        })
        return res.redirect('/carros/list')
    },
    formEdit: async(req, res) =>{
        const carros = await Carro.findByPk(req.params.id);
        return res.render('carro/formEdit', {carros})
    } 

    
}
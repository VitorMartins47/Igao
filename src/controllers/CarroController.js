const Carro = require('../models/Carro')

module.exports ={
    create: async (req,res) =>{
        const body =req.body;
        await Carro.create(body)
        return res.redirect('/carros')
    } ,
    list: async  (_,res)=> {
        const carros = await Carro.findAll()
        return res.render('carro/list',{carros})
    },
    form:   (_,res)=> res.render('carro/form'),

    editar: async(req, res) => {
        const body = req.body;
        const carros =  await Carro.findByPk(body.id);
        carros.update({
            Modelo: body.Modelo,
            Marca: body.Marca,
            Valor: body.Valor
        })
        carros.save()
        return res.redirect('/carros')
    },
    delete: async(req, res) => {
        const id = req.params.id;
        Carro.destroy({
            where: {id: id}
        })
        return res.redirect('/carros')
    },
    formEditar: async(req, res) =>{
        const carros = await Carro.findByPk(req.params.id);
        return res.render('carro/formEditar', {carros})
    } 

    
}
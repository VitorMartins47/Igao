const {Sequelize, DataTypes, Model}  = require('sequelize')
const path = require('path')    

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:path.resolve(__dirname, '..','..','db.sqlite')
    
})

const Carro = sequelize.define('Carro',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    Marca:{
        type: DataTypes.STRING,
        allowNull:false
    },

    Modelo:{
        type: DataTypes.STRING,
        allowNull:false,
    },

    Valor:{
        type: DataTypes.FLOAT,
        allowNull:false,
    }

})

Carro.sync()

module.exports = Carro
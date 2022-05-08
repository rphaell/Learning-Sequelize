const Sequelize = require('sequelize')
const database = require('../db')
const Fabricante = require("./fabricante")
const CategoriaProduto = require("./categoriaProduto")
const Categoria = require("./categoria")

const Produto = database.define('produto', {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome : {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    preco: Sequelize.DECIMAL,
    descricao: Sequelize.STRING
    
})

Produto.belongsTo(Fabricante, {
    constraint:true,
    foreignKey: 'idFabricante'
})

Fabricante.hasMany(Produto, {
    foreignKey: 'idFabricante'
})

Produto.belongsToMany(Categoria, {
    foreignKey: 'idProduto',
    constraints: true,
    through: {
        model: CategoriaProduto
    }
})
 
Categoria.belongsToMany(Produto, {
    foreignKey: 'idCategoria',
    constraints: true,
    through: {
        model: CategoriaProduto
    }
})

module.exports = Produto;
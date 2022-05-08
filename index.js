(async() => {

    const database = require('./db')
    const Produto = require("./models/produto")
    const Fabricante = require("./models/fabricante")
    const Categoria = require("./models/categoria")
    await database.sync();

    const novaCategoria = await Categoria.create({nome: 'Informática'});
    const produto = await Produto.findByPk(1);
    await produto.setCategoria([novaCategoria]);

    // const novoFabricante = await Fabricante.create({
    //     nome: 'Apple'
    // })

    // const novoProduto = await Produto.create({
    //     nome:'TV LG',
    //     preco:2334,
    //     descricao: 'TV 50 polegadas',
    //     idFabricante: novoFabricante.id
    // })

    // console.log(novoProduto);

    // const produto = await Produto.findByPk(1, {include:Fabricante});
    // console.log(produto.fabricante.nome);

    const fabricante = await Fabricante.findByPk(1, {include: Produto})
    // console.log(fabricante.produtos)

    // await produtos.destroy()

    // await Produto.destroy({
    //     where: { 
    //         preco:35
    // }})



})();
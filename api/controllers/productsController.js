const {Product} = require("../models/index");

exports.home = (req,res) => {
    Product.findAll()
    .then(guitar => {
        res.status(201).send(guitar)
    })
}

exports.findOneProduct = (req,res) => {
    const {id} = req.params
    Product.findOne({ where: {id}})
    .then(guitar => {
        res.status(201).send(guitar)
    })
      .catch(err => {
        console.log(err)
      })
}

exports.marca = (req,res) => {
    const { marca } = req.params
    Product.findAll({ where: {marca}})
    .then(guitar => {
        res.status(201).send(guitar)
    })
}

exports.marcaCategoria = (req,res) => {
    const { marca, categoria }= req.params
    Product.findAll({ where: {marca, categoria},
        raw : true})
    .then(guitar => {
        res.status(201).send(guitar)
    })
}


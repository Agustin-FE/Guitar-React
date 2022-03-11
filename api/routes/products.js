const express = require('express')
const routerProduct = express.Router()
const Product = require('../models/Products')


routerProduct.get("/guitar", (req,res) => {
    Product.findAll()
    .then(guitar => {
        res.status(201).send(guitar)
    })
})

routerProduct.get("/:id", (req,res) => {
    const {id} = req.params
    Product.findOne({ where: {id}})
    .then(guitar => {
        res.status(201).send(guitar)
    })
      .catch(err => {
        console.log(err)
      })
})
routerProduct.get("/:marca/:categoria", (req,res) => {
    const marca= req.params.marca
    const categoria= req.params.categoria
    Product.findAll({ where: {marca, categoria}})
    .then(guitar => {
        res.status(201).send(guitar)
    })
})

module.exports = routerProduct;
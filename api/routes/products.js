const express = require('express')
const routerProduct = express.Router()
const {Product} = require('../models/index')


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

routerProduct.get("/categories/:categoria", (req,res) => {
    const {categoria} = req.params
    Product.findAll( {where:{ categoria }})
    .then(guitar => {
        res.status(201).send(guitar)
    })
})

routerProduct.get("/brands/:brand", (req,res) => {
    const {brand} = req.params
    Product.findOne( {where:{ brand }})
    .then(guitar => {
        res.status(201).send(guitar)
    })
})



module.exports = routerProduct;
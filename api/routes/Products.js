const express = require('express')
const routerProducts = express.Router()
const passport = require('passport');
const Products = require('../models/Products')


routerProducts.get("/guitar", (req,res) => {
    Products.findAll(req.body)
    .then(guitar => {
        res.status(201).send(guitar)
    })
})

routerProducts.get("/:id", (req,res) => {
    const {id} = Number(req.params)
    Products.findOne( {where:{ id }})
    .then(product => {
        res.status(201).send(product)
    })
})

routerProducts.get("/categories/:categoria", (req,res) => {
    const {categoria} = req.params
    Products.findOne( {where:{ categoria }})
    .then(guitar => {
        res.status(201).send(guitar)
    })
})

routerProducts.get("/brands/:brand", (req,res) => {
    const {brand} = req.params
    Products.findOne( {where:{ brand }})
    .then(guitar => {
        res.status(201).send(guitar)
    })
})

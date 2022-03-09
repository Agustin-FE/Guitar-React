const { User } = require('@auth0/auth0-react')
const express = require('express')
const { where } = require('sequelize/types')
const routerProducts = express.Router()
const Products = require('../models/Products')
const Users = require('../models/Users')


routerProducts.get("/guitar", (req,res) => {
    Products.findAll()
    .then(guitar => {
        res.status(201).send(guitar)
    })
})

routerProducts.get("/:id", (req,res) => {
    const {id} = req.params
    Products.findOne({ where: {id}})
    .then(guitar => {
        res.status(201).send(guitar)
    })
      .catch(err => {
        console.log(err)
      })
})

routerProducts.get("/categories/:categoria", (req,res) => {
    const {categoria} = req.params
    Products.findAll( {where:{ categoria }})
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


module.exports = routerProducts;
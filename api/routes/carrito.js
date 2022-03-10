const express = require('express')
const routerCarrito = express.Router()
const Carrito = require('../models/Carrito')
const Products = require("../models/Products")


routerCarrito.get("/carritoShow", (req, res) => {
    Carrito.findAll()
        .then((items) => res.send(items))
})

routerCarrito.get("/carritoAdd/:id", (req, res) => {
    const { id } = req.params
    Products.findOne({ where: { id } })
        .then(product => {
            let idItem = product.id
            Carrito.create(idItem)
                .then((idItem) => res.send(idItem))
        })
})

routerCarrito.get("/carritoDelete/:id", (req, res) => {
    const { id } = req.params
    Products.findOne({ where: { id } })
        .then(id => {
            Carrito.destroy(idItem)
                .then((idItem) => (idItem))
        })
        .then((id) => {
            res.send(id)
        })
})

module.exports = routerCarrito
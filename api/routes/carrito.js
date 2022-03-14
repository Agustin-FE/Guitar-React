const express = require('express')
const routerCarrito = express.Router()
const {db, User, Product, Carrito, CarritoItem, Order, OrderItem} = require("../models/index");



routerCarrito.get("/carritoShow", (req, res) => { 
    const {userId } = req.body
    CarritoItem.findAll({where: { userId }})
        .then((items) => res.send(items))
}) 

routerCarrito.post("/carritoAdd", (req, res) => {
    let {userId, productId, cantidad} = req.body

    CarritoItem.create({ 
        userId: userId,
        productId: productId,
        cantidad: cantidad
    })
    .then((body) => {
        res.send("objeto creado")
    })
})

routerCarrito.delete("/carritoDelete", (req, res) => {
    let {userId, productId, cantidad} = req.body

    CarritoItem.findOne({where:{ 
        userId: userId,
        productId: productId,
        cantidad: cantidad
    }})
    .then((body) => {
        CarritoItem.destroy(body.id)
        .then((data) => res.send(data))
    })
})


module.exports = routerCarrito
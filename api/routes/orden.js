const express = require('express')
const routerOrder = express.Router()
const {db, User, Product, CarritoItem, Order, OrderItem} = require("../models/index");
const passport = require('passport');
const { findAll } = require('../models/Users');

routerOrder.get("/showorders/:id", (req,res) => {
    const {id} = req.params
    Order.findAll({ where: {id}})
    .then(orden => {
        CarritoItem.get({ where: {id}})
        res.status(201).send(orden)
    })
    .catch(err => console.log(err))
})

routerOrder.post("/createorders/:id", (req,res) => {
    const order = req.body
    const {id} = req.params
    Order.create(order)
    .then(orden => {
        CarritoItem.get({ where: {id}})
        .then((products) => {
            const order = products.map( item => {
                return {
                    cantidad: item.cantidad, 
                    orderId: orden.id,
                    productId: item.productId
                }
            } )
            OrderItem.bulkCreate(order)
            .then(() => res.send(orden))
            CarritoItem.destroy({ where: { userId: orden.userId } })
            //.then(() => res.send(id))
        })
    })
    .catch(err => console.log(err))
})
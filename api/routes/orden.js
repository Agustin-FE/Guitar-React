const express = require('express')
const routerOrder = express.Router()
const {db, User, Product, CarritoItem, Order, OrderItem} = require("../models/index");
const passport = require('passport');
const sendEmail = require('./sendEmail')
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

routerOrder.post("/createorders/:userId", (req,res) => {
    const order = req.body
    const {userId} = req.params
    Order.create(order)
    .then(orden => {
        CarritoItem.findAll({ where: {userId}})
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
            sendEmail(userId,orden,products)
            CarritoItem.destroy({ where: { userId: orden.userId } })
            //.then(() => res.send(id))
        })
    })
    .catch(err => console.log(err))
})

module.exports = routerOrder;
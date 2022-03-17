const express = require('express')
const routerOrder = express.Router()
const {db, User, Product, CarritoItem, Order, OrderItem} = require("../models/index");
const passport = require('passport');
const { findAll } = require('../models/Users');


routerOrder.get("/showorders/:id", (req,res) => {
    const {id} = req.params
    Order.create({ where: {id}})
    .then(orden => {
        CarritoItem.get({ where: {id}})
        res.status(201).send(orden)
    })
    .catch(err => console.log(err))
})
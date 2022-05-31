const express = require('express')
const routerOrder = express.Router()
const orderController = require('../controllers/ordenController')
//const { findAll } = require('../models/Users');

routerOrder.get("/showorders/:id", orderController.showOrders)

routerOrder.post("/createorders/:userId", orderController.createOrders )

module.exports = routerOrder;
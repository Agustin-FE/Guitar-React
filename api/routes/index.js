const express = require('express')
const router = express.Router()
const user = require('./users')
const product = require('./products')
const carrito = require('./carrito')
const admin = require('./admin')

router.use('/users', user)
router.use('/product', product)
router.use('/carrito', carrito)
router.use('/admin', admin)


module.exports = router
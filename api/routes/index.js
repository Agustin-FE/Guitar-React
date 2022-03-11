const express = require('express')
const router = express.Router()
const user = require('./users')
const product = require('./products')
const carrito = require('./carrito')

router.use('/users', user)
router.use('/product', product)
router.use('/carrito', carrito)


module.exports = router
const express = require('express')
const router = express.Router()
//const user = require('./Users')
const product = require('./Products')
//const carrito = require('./Carrito')

//router.use('./Users', user)
router.use('/product', product)
//router.use('./carrito', carrito)


module.exports = router
const express = require('express')
const routerProduct = express.Router()
const { Op } = require("sequelize");
const productController = require('../controllers/productsController')

routerProduct.get("/", productController.home)

routerProduct.get("/select/:id", productController.findOneProduct )

routerProduct.get("/:marca", productController.marca )

routerProduct.get("/:marca/:categoria", productController.marcaCategoria)

/*routerProduct.get("/:nombre", (req,res) => {
    const nombre = req.params
    const findProduct = await Product.findAll({ 
        where:{
            marca: {[op.startWith]: nombre},
        }
    })
    return(res.status(201).send(findProduct))
})*/


module.exports = routerProduct;
const express = require('express')
const routerCarrito = express.Router()
const carritoController = require('../controllers/carritoController')


routerCarrito.get("/show/:userId", carritoController.showCarrito ) 

routerCarrito.post("/add", carritoController.addCarrito )

routerCarrito.delete("/delete/:userId/:productId", carritoController.deleteCarrito )

routerCarrito.put("/update/:userId/:productId", carritoController.changeCarrito)

/* routerCarrito.delete("/destroy/:id", (req, res) => {
    const {id} = req.params
    CarritoItem.destroy({ where: { userId: id } })
    .then(() => res.send(id))
}) */



module.exports = routerCarrito
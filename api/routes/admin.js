const express = require('express')
const routerAdmin = express.Router()
const adminController = require('../controllers/adminController')


// ------------------------------------------------- usuarios -------------------------------------------------

routerAdmin.get("/showuser", adminController.showUser)

routerAdmin.get("/showuser/:id", adminController.showUserId)

routerAdmin.delete('/deleteuser/:id', adminController.deleteUser)

routerAdmin.post("/changeuser/", adminController.changeUser)

// ------------------------------------------------- productos -------------------------------------------------

routerAdmin.post("/addproduct", adminController.addProduct)

routerAdmin.delete("/deleteproduct", adminController.deleteProduct)

routerAdmin.post("/changeproduct", adminController.changeProduct)


module.exports = routerAdmin;
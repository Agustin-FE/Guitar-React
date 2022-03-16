const express = require('express')
const routerAdmin = express.Router()
const {db, User, Product, Carrito, CarritoItem, Order, OrderItem} = require("../models/index");
const passport = require('passport');


routerAdmin.get("/showuser", (req,res) => {
        User.findAll()
        .then(users => {
            res.status(201).send(users)
        })
        .catch(err => console.log(err))
})

routerAdmin.delete('deleteuser/:id', function (req, res, next) {
    const {id} = req.params
        User.destroy({
            where: {
              id: id
            }
          })
          .then((data) => res.sendStatus(202))
          .catch(res.sendStatus(204))
  })

routerAdmin.post("/changeuser", (req,res) => {
        User.update(req.body,
        { where:{
            admin : true,
        }})
        .then((data) => res.sendStatus(200))
        .catch(err => console.log(err))
})

routerAdmin.post("/addproduct", (req,res) => {
    const {nombre, precio,descripcion, categoria, marca, imagen, imagen2, stock} = req.body
        Product.create({
            nombre : nombre,
            precio: precio,
            descripcion: descripcion,
            categoria: categoria,
            marca: marca,
            imagen: imagen,
            imagen2: imagen2,
            stock: stock
        })
        .then(product => {
            res.status(201).send(product)
        })
})

routerAdmin.delete("/deleteproduct", (req,res) => {
    const {id} = req.body
        Product.destroy({
            where: {
                id: id
              }
            })
        .then((data) => res.sendStatus(202))
        .catch(res.sendStatus(204))
})

routerAdmin.post("/changeproduct", (req,res) => {
    const {nombre, precio,descripcion, categoria, marca, imagen, imagen2, stock} = req.body
        Product.update({
            nombre : nombre,
            precio: precio,
            descripcion: descripcion,
            categoria: categoria,
            marca: marca,
            imagen: imagen,
            imagen2: imagen2,
            stock: stock
        })
        .then(product => {
            res.status(201).send(product)
        })
})

module.exports = routerAdmin;
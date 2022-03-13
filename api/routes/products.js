const express = require('express')
const routerProduct = express.Router()
const Product = require('../models/Products')


routerProduct.get("/guitar", (req,res) => {
    Product.findAll()
    .then(guitar => {
        res.status(201).send(guitar)
    })
})

routerProduct.get("/:id", (req,res) => {
    const {id} = req.params
    Product.findOne({ where: {id}})
    .then(guitar => {
        res.status(201).send(guitar)
    })
      .catch(err => {
        console.log(err)
      })
})
routerProduct.get("/:marca/:categoria", (req,res) => {
    const marca= req.params.marca
    const categoria= req.params.categoria
    Product.findAll({ where: {marca, categoria}})
    .then(guitar => {
        res.status(201).send(guitar)
    })
})

routerProduct.post("/addProduct", (req,res) => {
    const {nombre, precio,descripcion, categoria, marca, imagen, imagen2, stock} = req.body
    /*const {admin} = req.body
    if(admin === true)
    {*/
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
    //}
})

routerProduct.delete("/deleteProduct", (req,res) => {
    const {id} = req.body
    /*const {admin} = req.body
    if(admin === true)
    {*/
        Product.destroy({
            where: {
                id: id
              }
            })
        .then((data) => res.sendStatus(202))
        .catch(res.sendStatus(204))
    //}
})

routerProduct.post("/changeProduct", (req,res) => {
    const {nombre, precio,descripcion, categoria, marca, imagen, imagen2, stock} = req.body
    /*const {admin} = req.body
    if(admin === true)
    {*/
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
    //}
})

module.exports = routerProduct;
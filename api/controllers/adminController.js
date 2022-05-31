const {User, Product} = require("../models/index");


exports.showUser = (req,res) => {
    User.findAll()
    .then(users => {
        res.status(201).send(users)
    })
    .catch(err => console.log(err))
}

exports.showUserId = (req,res) => {
    const {id} = req.params
    User.findOne({where: {id}})
    .then(users => {
        res.status(201).send(users)
    })
    .catch(err => console.log(err))
}

exports.deleteUser = (req, res) => {
    const {id} = req.params
        User.destroy({
            where: {
              id: id
            }
          })
          .then((data) => res.sendStatus(202))
  }

exports.changeUser = (req,res) => {
    const {admin} = req.body
    //const {id} = req.params
    User.update(req.body,
    { where:{
        admin : admin,
    }})
    .then((data) => res.sendStatus(200))
    .catch(err => console.log(err))
}


exports.addProduct = (req,res) => {
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
}

exports.deleteProduct = (req,res) => {
    const {id} = req.body
        Product.destroy({
            where: {
                id: id
              }
            })
        .then((data) => res.sendStatus(202))
        .catch(res.sendStatus(204))
}

exports.changeProduct = (req,res) => {
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
}
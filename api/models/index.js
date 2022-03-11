const db = require('./db');
const User = require('./Users');
const Product = require('./Products')
const Carrito = require('./Carrito')


User.hasOne(Carrito, {as : "origin"})
Carrito.belongsTo(User, {as: "IDProduc"})

module.exports = db
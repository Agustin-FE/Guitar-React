const db = require('./db');
const User = require('./Users');
const Product = require('./Products')
const Carrito = require('./Carrito')

User.hasOne(Carrito)
Carrito.belongsTo(User)


module.exports = db;
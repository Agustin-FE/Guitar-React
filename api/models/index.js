const db = require('./db');
//const User = require('./Users');
//const Product = require('./Products')
//const Carrito = require('./Carrito')
//const Order = require('./Orden')

/*
User.hasOne(Carrito)
//
Carrito.belongsTo(User)
//
Order.belongsTo(User)
//
User.hasMany(Order)
//
Order.belongsToMany(Product,{through: OrderItem})
//
Product.belongsToMany(Order,{through: OrderItem})
//
Carrito.belongsToMany(Product,{through: CarritoItem})
//
Product.belongsToMany(Carrito,{through: CarritoItem})
*/

module.exports = db
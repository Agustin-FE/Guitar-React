const db = require('./db');
const User = require('./Users');
const Product = require('./Products')
//const Carrito = require('./Carrito')

User.belongsToMany(Product, { as: "idCarrito" , through: "idCarrito"});
Product.belongsToMany(User, { as: "idCarrito" , through: "idCarrito"});


module.exports = {db, User, Product}
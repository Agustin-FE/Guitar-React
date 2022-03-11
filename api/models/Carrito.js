const S = require('sequelize');
const db = require('./db');

class Carrito extends S.Model {}

Carrito.init({

}, { sequelize: db, modelName: 'carrito' });  


module.exports = Carrito;
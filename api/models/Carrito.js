const S = require('sequelize');
const db = require('./db');

class Carrito extends S.Model {}

Carrito.init({
  surname:{
    type: S.STRING,
    allowNull: false,
  },

}, { sequelize: db, modelName: 'carrito' });   

module.exports = Carrito;
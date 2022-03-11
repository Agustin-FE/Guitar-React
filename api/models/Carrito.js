const S = require('sequelize');
const db = require('./db');
const Products = require('./Products');
const User = require("./Users");

class Carrito extends S.Model {}

Carrito.init({
idProducts:{
    type: S.INTEGER,
    references:{
      model: Products,
      key: "id"
    },
    allowNull: false,
},
idUser:{
  type: S.INTEGER,
    references:{
      model: User,
      key: "id"
    },
    allowNull: false,
},
  cantidad:{
    type: S.INTEGER,
},
}, { sequelize: db, modelName: 'carrito' });  


module.exports = Carrito;
const S = require('sequelize');
const db = require('../config/db');

class OrderItem extends S.Model {}

OrderItem.init({
    cantidad:{
        type: S.INTEGER,
    },
}, { sequelize: db, modelName: 'orderItem' });  


module.exports = OrderItem;
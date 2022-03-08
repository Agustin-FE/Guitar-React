const Sequelize = require('sequelize')

const db = new Sequelize("guitardb", null, null, {host: 'localhost', dialect:'postgres'})

module.exports = db;



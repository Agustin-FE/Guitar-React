const {CarritoItem} = require("../models/index");

exports.showCarrito = (req, res) => { 
    const { userId } = req.params
    CarritoItem
    .findAll({where: { userId: userId }})
    .then( items => {
        const cart = items.map( item => {
            const data = item.dataValues
            return {
                cantidad: data.cantidad, 
                userId: data.userId,
                productId: data.productId
                }
        } )
        res.send( cart )
    })
}

exports.addCarrito = (req, res) => {
    let { userId, productId, cantidad } = req.body
    CarritoItem.create({ 
        userId: userId,
        productId: productId,
        cantidad: cantidad
    })
    .then( ( { dataValues } ) => 
        res.send( {
            userId: dataValues.userId,
            productId: dataValues.productId,
            cantidad: dataValues.cantidad
        } ) )
}

exports.deleteCarrito = (req, res) => {
    const { userId, productId } = req.params
    CarritoItem
    .destroy({ where: { productId: productId, userId: userId } })
    .then( () =>
        res.send( { productId: productId } ) )
}

exports.changeCarrito = (req, res) => {
    let { cantidad, productId, userId } = req.body
    CarritoItem.update(
        {cantidad: cantidad}, 
        {where: { productId: productId, userId: userId } } )
    .then( () =>
        res.send( req.body ) )
}
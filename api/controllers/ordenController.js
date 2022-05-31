const {CarritoItem, Order, OrderItem} = require("../models/index");
const sendEmail = require('./sendEmail')

exports.showOrders = (req,res) => {
    const {id} = req.params
    Order.findAll({ where: {id}})
    .then(orden => {
        CarritoItem.get({ where: {id}})
        res.status(201).send(orden)
    })
    .catch(err => console.log(err))
}

exports.createOrders = (req,res) => {
    const order = req.body
    const {userId} = req.params
    Order.create(order)
    .then(orden => {
        CarritoItem.findAll({ where: {userId}})
        .then((products) => {
            const order = products.map( item => {
                return {
                    cantidad: item.cantidad, 
                    orderId: orden.id,
                    productId: item.productId
                }
            } )
            
            OrderItem.bulkCreate(order)
            .then(() => res.send(orden))

            CarritoItem.destroy({ where: { userId: userId } })
            .then(() => sendEmail(userId,orden,products))
        })
    })
    .catch(err => console.log(err))
}

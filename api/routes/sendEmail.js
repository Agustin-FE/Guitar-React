"use strict";
const nodemailer = require("nodemailer");
const { applyMiddleware } = require("redux");
const {db, User, Product, CarritoItem, Order, OrderItem} = require("../models/index");

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(usuarioid, orden, arrayProducts) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  //let testAccount = await nodemailer.createTestAccount();
  const user = User.findOne({where: {usuarioid}})
  .then(usuarioInfo => {
    return(usuarioInfo)
  })

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Guitar React" <guitarreact@gmail.com>',
    to: user.email , 
    subject: "Guitar React - Orden:" + orden.ordenDeCompra, 
    text: 'Hola ' + user.name + ', Tu orden de pedido fue realizada con éxito, a continuacion te brindaremos un detalle de la misma. mediante tu numero de "orden de compra" podras ver el seguimiento del pedido. Muchas gracias por comprar en Guitar React, que tenga rock en su vida ', 
    html: "<b>Hello world?</b>", 
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendEmail().catch(console.error);




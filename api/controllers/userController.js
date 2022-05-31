const {User} = require("../models/index");

exports.login = (req, res) => {
    res.json(req.user);
};

exports.register = (req, res) => {
    const user = req.body
    User.create(user)
    .then((user)=> {
        res.status(201).send(user);
        /*Carrito.create({ userId: user.dataValues.id})
        .then((param) => {
            res.send(param)
        })*/
    })
}

exports.logout = (req, res) => {
    req.logOut();
    res.sendStatus(200);
}

exports.me = (req, res) => {
    if (!req.user) {
      return res.sendStatus(401);
    }
    res.send(req.user);
}

exports.update = (req,res) => {
    const {name,surname,email,password,direction,phoneNumber} = req.body
    User.update(req.body,
    { where:{
        name : name,
        surname : surname,
        email : email,
        password: password,
        direction: direction,
        phoneNumber: phoneNumber
    }})
    .then((data) => res.sendStatus(200))
    .catch(err => console.log(err))
}

exports.id = (req,res) => {
    const {id} = req.params
    User.findByPk({where: {id}})
    .then((user)=> {
        res.status(201).send(user);
    })
}
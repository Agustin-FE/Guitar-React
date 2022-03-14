const express = require('express')
const routerUser = express.Router()
const User = require('../models/Users')
const passport = require('passport');


routerUser.post("/login", passport.authenticate("local"), (req, res) => {
    res.json(req.user);
});

routerUser.post("/register", (req, res) => {
    console.log("Esto es register",req.body)
    User.create(req.body)
    .then((user)=> {
        res.status(201).send(user);
    })
});

routerUser.post("/logout", (req, res) => {
    req.logOut();
    res.sendStatus(200);
});

routerUser.get("/me", (req, res) => {
    if (!req.user) {
      return res.sendStatus(401);
    }
    res.send(req.user);
});

routerUser.post("/me", (req,res) => {
    const {name,surname,email,password} = req.body
    User.update(req.body,
    { where:{
        name : name,
        surname : surname,
        email : email,
        password: password
    }})
    .then((data) => res.sendStatus(200))
})

routerUser.get("/showUser", (req,res) => {
    const {admin} = req.body
    if(admin === true)
    {
        User.findAll()
        .then(users => {
            res.status(201).send(users)
        })
    }
})

routerUser.delete('/:id', function (req, res, next) {
    const {id} = req.params
    const {admin} = req.body
    if(admin === true)
    {
        User.destroy({
            where: {
              id: id
            }
          })
          .then((data) => res.sendStatus(202))
          .catch(res.sendStatus(204))
    }
  })

  routerUser.post("/me", (req,res) => {
    const {admin} = req.body
    if(admin === true)
    {
        User.update(req.body,
        { where:{
            admin : true,
        }})
        .then((data) => res.sendStatus(200))
    }
})

module.exports = routerUser;
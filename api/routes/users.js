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

module.exports = routerUser;
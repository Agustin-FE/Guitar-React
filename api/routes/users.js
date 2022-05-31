const express = require('express')
const routerUser = express.Router()
const passport = require('passport');
const userController = require('../controllers/userController');

/*routerUser.post("/login", passport.authenticate("local"), (req, res) => {
    res.json(req.user);
});*/

routerUser.get("/login", passport.authenticate("local"), userController.login)

routerUser.post("/register", userController.register);

routerUser.post("/logout", userController.logout);

routerUser.get("/me", userController.me);

routerUser.post("/me", userController.update)

//vas al perfil del que esta logeado
routerUser.get("/:id", userController.id)

module.exports = routerUser;
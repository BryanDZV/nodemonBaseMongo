const express = require('express');
const userRouter = express.Router();
const { createUser, authenticate, logout,getUsers,login} = require("../controllers/user.controller");
const { isAuth } = require("../middlewares/auth.middleware")


userRouter.post("/register", createUser);
userRouter.post("/authenticate", authenticate);
userRouter.post("/logout", [isAuth], logout);//[isAuth];//,  despues lo usamos viene de token
//Esta línea configura una ruta específica en el enrutador userRouter. Indica que cuando la ruta "/api/users/registers/" reciba una solicitud GET,
//la función getUsers se ejecutará para manejar esa solicitud.

userRouter.get("/", [isAuth], getUsers)// Ruta protegida para obtener la lista de usuarios (requiere autenticación)
//userRouter.post("/login", login);

module.exports =  userRouter; 
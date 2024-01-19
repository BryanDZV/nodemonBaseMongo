/* INICIAR EXPRESS y librerias NODE u otras ue importo default*/
require("dotenv").config();
console.log("Puerto dotenv iniciado cone exito");
const express = require("express");
const app = express();
console.log( "Puerto express iniciado cone exito");//process.env,
const logger = require("morgan");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const HTTPSTATUSCODE = require("./utils/httpStatusCode");
const connectMongo = require("./utils/db");
console.log("Puerto connectMongo iniciado con exito");
connectMongo();
const path = require('path');
//IMPORTAR otras rutas que voy a usar de creacion mia///* import ROUTES  */


const movieRouter = require("./src/routes/movie.routes");
console.log("Puerto movieRouter iniciado con exito");
const userRouter = require("./src/routes/user.routes");
const studioRouter = require("./src/routes/studio.routes");








//manejar SOLICITUDES
app.get("/", (request, response) => {
  response.status(200).json({
    message: "Welcome to server",
    app: "My App",
  });
});// ruta de bienvenida

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PATCH,POST,DELETE,PUT");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "http://localhost:4200"],
//     credentials: true,
//   })
// );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.set("secretKey",process.env.JWT_SECRET);
app.use(mongoSanitize());


app.use("/api/movies", movieRouter);

//Indica que cualquier ruta que comience con "/api/users/registers" 
//utilizará el enrutador userRouter para manejar esas solicitudes.
//Por ejemplo, si tienes una ruta en user.routes.js definida como userRouter.get("/", getUsers);, 
//entonces esta ruta será accesible como "/api/users/registers/" en la aplicación principal.

app.use("/api/users/registers", userRouter);
app.use("/api/users", userRouter);
app.use("/api/studio/", studioRouter);
//app.use("/api/actors/", actorRouter);


app.use((error, request, response, next) => {
  return response.status(error.status || 500).json(error.message || 'Unexpected error');
})






//ESCUCHADOR
app.listen(process.env.PORT, () => {
  console.log(`conectado al puerto: ${process.env.PORT}`); //DE ESTA FORMA BUENA PRACTICA
});




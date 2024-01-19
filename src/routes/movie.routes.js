const express = require("express");
const movieRouter = express.Router();
const {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movie.controller");


movieRouter.get('/list',getMovies);
movieRouter.get('/:id',getMovie);
movieRouter.post('/send',createMovie);
movieRouter.patch('/:id',updateMovie);//este solo actualiza por id, poner el id de objeto a actualizar postam
movieRouter.delete('/:id',deleteMovie);

module.exports=movieRouter;


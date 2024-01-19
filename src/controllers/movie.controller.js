const { req } = require("express");

const Movie = require("../models/movie.model");

//get alll
const getMovies = async (request, response) => {
  try {
    const movies = await Movie.find();
    response.status(200).json(movies);
  } catch (error) {
    console.log(error.message);
    response.status(404).json({ message: error.message });
  }
};

//get 1
const getMovie = async (request, response) => {
  try {
    const id = request.params.id;
    const movie = await Movie.findById(id);
    response.status(200).json(movie);
  } catch (error) {
    console.log(error.message);
    response.status(404).json({ message: `Movie ${id} not found` });
  }
};

//post
const createMovie = async (request, response) => {
  try {
    const movie = new Movie(request.body);
    await movie.save();
    response
      .status(201)
      .json({ message: "La película fue creada con éxito", movie: movie });
  } catch (error) {
    console.log(error.message);
    response.status(404).json({ message: error.message });
  }
};

//patch

const updateMovie = async (request, response) => {
  try {
    const id = request.params.id;
    const body = request.params.body;
    // Utilizando findByIdAndUpdate para actualizar el documento por su ID
    // new: true indica que queremos obtener la versión actualizada del documento
    const movie = await Movie.findByIdAndUpdate(id, body, { new: true });
    res.status(200).json(movie);
  } catch (error) {
    console.log(error.message);
    response.status(400).json({ message: error.message });
  }
};
//delete

const deleteMovie = async (request, response) => {
  try {
    const id = request.params.id;
    const movie = await Movie.findByIdAndDelete(id);
    response.status(200).json({ message: "Se borró la película" });
  } catch (error) {
    console.log(error.message);
    response.status(404).json({ message: error.message });
  }
};

module.exports = {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};

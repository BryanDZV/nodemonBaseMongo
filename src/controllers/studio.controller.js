const { req } = require("express");
const Movie=require("../models/movie.model");
const Studio = require("../models/studio.model");
const httpStatusCode = require("../../utils/httpStatusCode");

//get all
const getStudios = async (request, response, next) => {
  try {
    const studios = await Studio.find();
    response.status(200).json(studios);
  } catch (error) {
    next(error);
  }
};

//get 1
const getStudio = async (request, response, next) => {
  try {
    const id = request.params.id;
    const studio = await Studio.findById(id);
    response.status(200).json(studio);
  } catch (error) {
    next(error);
  }
};

//post
const createStudio = async (request, response, next) => {
  try {
    const studio = new Studio(request.body);
    await studio.save();
    response
      .status(201)
      .json({ message: "La película fue creada con éxito", movie: movie });
  } catch (error) {
    next(error);
  }
};

//patch

const updateStudio = async (request, response, next) => {
  try {
    const id = request.params.id;
    const body = request.params.body;
    // Utilizando findByIdAndUpdate para actualizar el documento por su ID
    // new: true indica que queremos obtener la versión actualizada del documento
    const studio = await Studio.findByIdAndUpdate(id, body, { new: true });
    res.status(200).json(studio);
  } catch (error) {
    next(error);
  }
};
//delete

const deleteStudio = async (request, response, next) => {
  try {
    const id = request.params.id;
    const studio = await Studio.findByIdAndDelete(id);
    response.status(200).json({ message: "Se borró la película" });
  } catch (error) {
    next(error);
  }
};


const addMovie = async (request, response, next) => {
  const { studio_id, movie_id } = request.body;
  if (!studio_id || !movie_id) {
    return response
      .status(404)
      .json({ status: 404, message: HTTPSTATSCODE(404), data: request.body });
  }
try {
  const studio=await Studio.findById(studio_id);
  const movie=await Movie.findById(movie_id);
  if (studio&&movie) {
    studio.movies.push(movie_id);
    await studio.save();
    response.status(200).json({
      status:200, message: HTTPSTATSCODE[200],
      data:studio
    });
  
    
  }
} catch (error) {
  
}

};
module.exports = {
  getStudios,
  getStudio,
  createStudio,
  updateStudio,
  deleteStudio,
  addMovie
};

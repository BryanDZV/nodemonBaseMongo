const mongoose=require('mongoose')
const movieSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'Una película debe tener título'],
        unique: true,
        trim: true,
        minlength: 2
    },
    director: {
        type: String,
        required: [true, 'Una película debe tener director'],
        trim: true,
    },
    anio: {
        type: Number,
        required: [true, 'Una película debe tener año'],
        trim: true,
    },
    genero: {
        type: String,
        required: [true, 'Una película debe tener genero'],
        trim: true,
    }},{
      timestamps:true
      // te genera la fecha de creacion del objeto y fecha de modificacion
  });
  // relacionar mi schema con mi modelo de la base de datos
  const Movie = mongoose.model("Movie", movieSchema);
  
  module.exports = Movie;
  
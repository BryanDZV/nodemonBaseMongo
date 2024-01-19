const mongoose=require('mongoose')
const studioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Un studio debe tener nombre'],
        unique: true,
        trim:true
    },
    ciudad: {
        type: String,
        required: [true, 'Una película debe tener nombre'],
        trim: true,
    },
    presupuesto: {
        type: Number,
        required: [true, 'Una película debe tener nombre'],
        trim: true,
    },
    peliculas: [
        {type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"}
    ],
      timestamps:true
      // te genera la fecha de creacion del objeto y fecha de modificacion
  });
  // relacionar mi schema con mi modelo de la base de datos
  const Studio = mongoose.model("Studio", studioSchema);
  
  module.exports = Studio;
  
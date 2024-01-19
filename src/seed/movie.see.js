const mongoose = require("mongoose");

const Comida = require("../api/models/comida.model");

const arrayComidas = [
  {
    nombre: "Hamburguesa",
    pais: "EEUU",
    foto: "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=r2mLaVFZxtRk4MeKpdQLtwTkcctyOpGEP-OxPeyo4_c=",
  },
  {
    nombre: "Cuscus",
    pais: "Marruecos",
    foto: "https://media.istockphoto.com/id/500753068/es/foto/cusc%C3%BAs-con-tomates-y-albahaca.jpg?s=612x612&w=0&k=20&c=J62zI1V1bMSeAGYQrGwJQfpDm_IGedy9I-FWp648nI8=",
  },
  {
    nombre: "Kebab",
    pais: "Armenia",
    foto: "https://media.istockphoto.com/id/851493796/es/foto/primer-plano-de-s%C3%A1ndwich-de-kebab.jpg?s=612x612&w=0&k=20&c=wj2BpKqk8IReC78RIDEG6cUCN7WDAtqXdwrFbUUZHaQ=",
  },
  {
    nombre: "Empanada",
    pais: "Argentina",
    foto: "https://cdn0.recetasgratis.net/es/posts/6/3/5/empanada_argentina_29536_orig.jpg",
  },
  {
    nombre: "Sushi",
    pais: "Japon",
    foto: "https://img.freepik.com/fotos-premium/juego-grande-sushi-rollos-juegos-rollos-enormes-platos-blancos-plato-enorme-shushi_457363-1987.jpg?w=2000",
  },
  {
    nombre: "Paella",
    pais: "España",
    foto: "https://statics-cuidateplus.marca.com/cms/paella-valenciana-receta.jpg",
  },
];

mongoose
  .connect("tu base de datos")
  .then(async () => {
    const allComidas = await Comida.find();
    if (allComidas.length > 0) {
      await Comida.collection.drop();
      console.log("Comidas borradas");
    }
  })
  .catch((error) => console.log("error borrando comidas", error))
  .then(async () => {
    const comidaMap = arrayComidas.map((comida) => new Comida(comida));
    await Comida.insertMany(comidaMap);
    console.log("Comidas insertadas correctamente");
  })
  .catch((error) => console.log("error insertando comidas", error))
  .finally(() => mongoose.disconnect());

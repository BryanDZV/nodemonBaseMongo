const express = require("express");
const studioRouter = express.Router();
const {
  getStudios,
  getStudio,
  createStudio,
  updateStudio,
  deleteStudio,
} = require("../controllers/studio.controller");
const { isAuth } = require("../middlewares/auth.middleware");


studioRouter.get('/list',getStudios);
studioRouter.get('/:id',getStudio);
studioRouter.post('/send',[isAuth],createStudio);
studioRouter.patch('/:id',[isAuth],updateStudio);//este solo actualiza por id, poner el id de objeto a actualizar postam
studioRouter.delete('/:id',[isAuth],deleteStudio);

module.exports=studioRouter;



import express from "express";
import {
  getClimaCiudadController,
  getClimaUbicacionController,
} from "./controllers";

export const routerClima = express.Router();

routerClima.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("Middleware general del clima");
    next();
  }
);
routerClima.get("/ciudad/:nombreCiudad", getClimaCiudadController);
routerClima.get("/ubicacion/lat/:lat/lon/:lon", getClimaUbicacionController);
import express from "express";

export const getClimaCiudadController = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log("Middleware de clima ciudad GET");
  res.send(`Clima en ${req.params.nombreCiudad}`);
};

export const getClimaUbicacionController = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const lat = req.params.lat;
  const lon = req.params.lon;

  res.status(500).send({
    error: "not possible with location",
    data: {
      lat,
      lon,
    },
  });
};

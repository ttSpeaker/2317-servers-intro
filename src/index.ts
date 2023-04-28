import http from "http";
import axios from "axios";
import express from "express";
import { routerClima } from "./routers";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(
      `REQUEST RECEIVED:\n${req.method} ${req.url}\n${JSON.stringify(req.body)}`
    );
    next();
  }
);

app.use("/clima", routerClima);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// API REST CLIMA
// consultar clima actual por ciudad
// consultar clima actual por ubicacion (lat/lon)

// consultar pronostico por ciudad (cant dias opcional)
// consultar pronostico por ubicacion (lat/lon) (cant dias opcional)

// consultar ciudades (filtrar pais opcional)

// guardar lugares favorito
// editar favoritos
// ver favoritos

// ENDPOINTS
// GET /clima/ciudad/:ciudad => www.weather.com/clima/ciudad/montevideo
// GET /clima/ubicacion/lat/:lat/lon/:lon => www.weather.com/clima/ubicacion/lat/41231/lon/-21314

// GET /pronostico/ciudad/:ciudad
// GET /pronostico/ubicacion/lat/:lat/lon/:lon (lat y lon son PATH params)

// GET /ciudades?pais=UY

// POST /favoritos
// PUT /favoritos/:id
// GET /favoritos => www.weather.com/favoritos
// GET /favoritos/:id => www.weather.com/favoritos/1234
// DELETE /favoritos/:id

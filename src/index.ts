import http from "http";
import axios from "axios";
const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const urlParts = req.url?.split("/");
    if (urlParts === undefined) {
      res.statusCode = 400;
      res.end("BAD REQUEST");
      return;
    }
    console.log(urlParts);
    if (
      req.method === "GET" &&
      urlParts[1] === "clima" &&
      urlParts[2] == "sugerencia" &&
      urlParts[3] !== undefined
    ) {
      try {
        const cityName = urlParts[3];
        const result = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=db26c5d0832190ebdd4407403115251d`
        );
        console.log(result.data);
        res.setHeader("content-type", "application/json");
        res.statusCode = 200;
        res.end(JSON.stringify(result.data));
        return;
      } catch (error: any) {
        res.statusCode = 500;
        res.end(error.message);
        return;
      }
    }
    res.statusCode = 404;
    res.end("NOT FOUND");
  }
);

server.listen(3000, () => {
  console.log("Server running on port 3000");
});


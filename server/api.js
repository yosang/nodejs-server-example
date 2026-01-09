const http = require("http");
const pizzas = require("./pizzas.json");
const carros = require("./carros.json");

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  if (req.method == "GET" && req.url == "/pizzas") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(pizzas));
  } else if (req.method == "GET" && req.url == "/carros") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(carros));
  } else {
    res.statusCode = 404;
    res.end("404 Not found");
  }
});

server.listen(3001, () => {
  console.log("Server is up on port 3001");
});

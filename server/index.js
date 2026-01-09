const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);

  res.write("Hello\n");

  if (req.method == "GET") {
    res.write(`Method used: GET \n`);
  } else if (req.method == "POST") {
    res.write(`Method used: POST \n`);
  } else if (req.method == "PUT") {
    res.write(`Method used: PUT \n`);
  } else if (req.method == "DELETE") {
    res.write(`Method used: DELETE \n`);
  }

  if (req.url == "/") {
    res.write(`Your url is /`);
  } else if (req.url == "/carros") {
    res.write(`Your url is /carros`);
  } else if (req.url == "/pizzas") {
    res.write(`Your url is /pizzas`);
  }

  res.end();
});

server.listen(3000, () => {
  console.log("Server is up on port 3000");
});

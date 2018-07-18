var express = require("express");
const app = express();

app.get("/", (request, response) => {
  app.send({ Hi: "There" });
});

app.listen(5000);

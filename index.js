const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello, World!");
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

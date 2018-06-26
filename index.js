const express = require("express");
const app = express();

app.get("/test", function(req, res) {
  res.send({
    a: "c",
    b: "d"
  });
});

const server = app.listen(2420);

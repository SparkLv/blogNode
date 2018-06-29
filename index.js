const express = require("express");
const Router = require("./router");
const app = express();
const bodyParser = require("body-parser");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",req.headers['access-control-request-headers']);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

Router(app);

const server = app.listen(2420);
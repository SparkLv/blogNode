const express = require("express");
const Router = require("./routes");
const app = express();
const bodyParser = require("body-parser");

const loveonio = require('./routes/loveon/socket');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "PATCH,PUT,DELETE,POST, GET, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    req.headers["access-control-request-headers"]
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

Router(app);

const server = app.listen(2420);

// loveonio.init();

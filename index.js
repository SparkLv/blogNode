const express = require("express");
const Router = require("./router");
const app = express();

Router(app);

const server = app.listen(2420);

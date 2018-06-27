const tag = require("./tag.js");

module.exports = function(app) {
  app.get("/tag", tag);
};

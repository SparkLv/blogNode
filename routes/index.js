const tag = require("./tag.js");
const blogs = require("./blogs.js");
const upload = require('./upload.js');

module.exports = function(app) {
  app.route("/tag").get(tag.get).post(tag.post);
  app.route("/tag/:id").patch(tag.patch).delete(tag.delete).get(tag.getByCode);
  app.route("/blogs").get(blogs.get).post(blogs.post);
  app.route("/blogs/:id").patch(blogs.patch).delete(blogs.delete).get(blogs.getById);
  app.route('/blogs/getByPage').post(blogs.getByPage);
  app.route('/blog/upload').post(upload.upload);
};
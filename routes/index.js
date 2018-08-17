const tag = require("./tag.js");
const blogs = require("./blogs.js");
const users = require('./users.js');
const comment = require('./comment.js');
const watch = require('./watch.js');
const good = require('./good.js')
const upload = require('./upload.js');
const loveonUser = require('./loveon/user');
const loveonUpload = require('./loveon/upload');

module.exports = function (app) {
  app.route("/tag").get(tag.get).post(tag.post);
  app.route("/tag/:id").patch(tag.patch).delete(tag.delete).get(tag.getByCode);
  app.route("/blogs").get(blogs.get).post(blogs.post);
  app.route("/blogs/:id").patch(blogs.patch).delete(blogs.delete).get(blogs.getById);
  app.route('/blogs/getByPage').post(blogs.getByPage);
  app.route('/blog/upload').post(upload.upload);
  app.route('/login').post(users.login);
  app.route('/validToken').get(users.validToken);
  app.route('/comment/:id').get(comment.getById).post(comment.post);
  app.route('/watch/:id').get(watch.getById).post(watch.watch);
  app.route('/good/:id').post(good.good);
  app.route('/loveon/user/login').post(loveonUser.login);
  app.route('/loveon/user/register').post(loveonUser.register);
  app.route('/loveon/upload').post(loveonUpload.upload);
};
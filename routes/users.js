const jwt = require("jwt-simple");
const util = require("./util.js");
module.exports = {
  login: function(req, res) {
    if (req.body.username === "lwb" && req.body.password === "qwe123123") {
      var token = jwt.encode(
        {
          iss: 24,
          exp: Date.now() + 1000 * 60 * 60 * 3
        },
        "jwtTokenSecret"
      );
      res.send({
        code: 1,
        token: token,
        message: "登陆成功"
      });
    } else {
      res.send({ code: 1001, message: "用户名或密码错误" });
    }
  },
  validToken(req, res) {
    util.validateToken(function() {
      res.send({
        code: 1,
        message: "token有效"
      });
    },req,res);
  }
};

const jwt = require("jwt-simple");

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
    try {
      var tokenObj = jwt.decode(req.headers.token, "jwtTokenSecret");
      if (tokenObj.iss == 24 && tokenObj.exp > Date.now()) {
        res.send({
          code: 1,
          message: "token有效"
        });
      } else {
        res.send({
          code: 1001,
          message: "token无效"
        });
      }
    } catch (err) {
      res.send({
        code: 1001,
        message: "token无效"
      });
    }
  }
};

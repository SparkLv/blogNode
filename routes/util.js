const jwt = require("jwt-simple");

module.exports = {
  res400: function(err, res) {
    res.status(400);
    res.send(err);
  },
  validateToken(fun,req,res) {
    try {
      var tokenObj = jwt.decode(req.headers.token, "jwtTokenSecret");
      if (tokenObj.iss == 24 && tokenObj.exp > Date.now()) {
        fun();
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

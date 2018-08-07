const sql = require("../database/sql/comment.js");
const con = require("../database/index.js");
const util = require("./util");

module.exports = {
  getById: function(req, res) {
    con(sql.query,[req.params.id],function(result){res.send(result)},function(err){util.res400(err,res)});
  },
  post: function(req, res) {
    const param = [req.params.id,req.body.username,req.body.email,req.body.content,req.body.time];
    con(sql.insert,param,function(result) {
        res.send("操作成功");
    },function(err) {util.res400(err,res);});
  }
};
const sql = require("../database/sql/blogs.js");
const con = require("../database/index.js");

module.exports = {
  get: function(req, res) {
    con(sql.query,[],function(result){res.send(result)},function(err){res.send(err)});
  },
  post: function(req, res) {
    const param = [req.body.title,req.body.content,req.body.tags,req.body.imgUrl,req.body.updateTime,req.body.remark];
    con(sql.insert,param,function(result) {
        res.send("操作成功");
    },function(err) {res.send(err);});
  },
  patch: function(req, res) {
    const param = [req.body.title,req.body.content,req.body.tags,req.body.imgUrl,req.body.updateTime,req.body.remark];    
    con(sql.update,param,function() {res.send("操作成功");},function(err) {res.send(err);});
  },
  delete: function(req, res) {
    con(sql.delete,[req.params.id],function() {res.send("操作成功");},function(err) {res.send(err);});
  }
};
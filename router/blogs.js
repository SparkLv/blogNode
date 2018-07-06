const sql = require("../database/sql/blogs.js");
const con = require("../database/index.js");
const util = require("./util");

module.exports = {
  get: function(req, res) {
    con(sql.query,[],function(result){res.send(result)},function(err){util.res400(err,res)});
  },
  getById:function(req,res){
    con(sql.queryById,[req.params.id],function(result){res.send(result[0])},function(err){util.res400(err,res)});
  },
  post: function(req, res) {
    const param = [req.body.title,req.body.content,req.body.tags,req.body.imgUrl,req.body.updateTime,req.body.remark];
    con(sql.insert,param,function(result) {
        res.send("操作成功");
    },function(err){util.res400(err,res)});
  },
  patch: function(req, res) {
    const param = [req.body.title,req.body.content,req.body.tags,req.body.imgUrl,req.body.updateTime,req.body.remark];    
    con(sql.update,param,function() {res.send("操作成功");},function(err){util.res400(err,res)});
  },
  delete: function(req, res) {
    con(sql.delete,[req.params.id],function() {res.send("操作成功");},function(err){util.res400(err,res)});
  }
};
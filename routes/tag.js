const sql = require("../database/sql/tag.js");
const con = require("../database/index.js");
const util = require("./util");

module.exports = {
  get: function(req, res) {
    con(sql.query,[],function(result){res.send(result)},function(err){util.res400(err,res)});
  },
  getByCode: function(req, res) {
    con(sql.queryByCode,[req.params.id],function(result){res.send(result)},function(err){util.res400(err,res)});
  },
  post: function(req, res) {
    const param = [req.body.name,req.body.color,req.body.bgColor,req.body.code];
    const param2 = [req.body.code];
    con(sql.insert,param,function(result) {
        param2.push(result.insertId)
        con(sql.insertRe,param2,function() {res.send("操作成功");},function(err) {util.res400(err,res);});
    },function(err) {util.res400(err,res);});
  },
  patch: function(req, res) {
    const param = [req.body.name,req.body.color,req.body.bgColor,req.body.code,req.params.id];
    con(sql.update,param,function() {res.send("操作成功");},function(err) {util.res400(err,res);});
  },
  delete: function(req, res) {
    con(sql.delete,[req.params.id],function() {res.send("操作成功");},function(err) {util.res400(err,res);});
  }
};

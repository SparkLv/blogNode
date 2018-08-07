const sql = require("../database/sql/watch.js");
const con = require("../database/index.js");
const util = require("./util");

module.exports = {
  watch: function(req, res) {
    con(sql.query,[req.params.id],function(result) {
       if(result.length){
        con(sql.update,[parseInt(result[0].num,10)+1,req.params.id],function(result2){
          res.send('操作成功')
        },function(err) {util.res400(err,res);})
       }else{
        con(sql.insert,[req.params.id,1],function(result2){
            res.send('操作成功')
        },function(err) {util.res400(err,res);})
       }
    },function(err) {util.res400(err,res);});
  },
  getById: function(req, res) {
    con(sql.query,[req.params.id],function(result){res.send(result)},function(err){util.res400(err,res)});
  }
};
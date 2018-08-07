const sql = require("../database/sql/good.js");
const con = require("../database/index.js");
const util = require("./util");

module.exports = {
  good: function(req, res) {
    con(sql.query,[req.params.id],function(result) {
       if(result.length){
        let good = result[0].good;
        let bad = result[0].bad;
        if(req.body.type){
            good++;
        }
        else{
            bad++;
        }
        con(sql.update,[good,bad,req.params.id],function(result2){
            res.send('操作成功')
        },function(err) {util.res400(err,res);})
       }else{
        con(sql.insert,[req.params.id,(req.body.type?1:0),(req.body.type?0:1)],function(result2){
            res.send('操作成功')
        },function(err) {util.res400(err,res);})
       }
    },function(err) {util.res400(err,res);});
  }
};
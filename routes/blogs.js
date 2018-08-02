const sql = require("../database/sql/blogs.js");
const tagSql = require("../database/sql/tag.js");
const con = require("../database/index.js");
const util = require("./util");

function getTagsObj(blogs,tags){
  const tagIdMap = tags.map(item=>item.id);
  const result = blogs.map(item=>{
    const arr = item.tags.split(',');
    item.tagsO = arr.map(item=>{
      const index = tagIdMap.indexOf(parseInt(item,10));
      return tags[index];
    })
    return item
  })
  return result
}

module.exports = {
  get: function(req, res) {
    con(sql.query,[],function(blogs){
      con(tagSql.query,[],function(tags){
        res.send(getTagsObj(blogs,tags));
      },function(err){util.res400(err,res)});
    },function(err){util.res400(err,res)});
  },
  getById:function(req,res){
    con(sql.queryById,[req.params.id],function(result){res.send(result[0])},function(err){util.res400(err,res)});
  },
  getByPage:function(req,res){
    const condi = req.body.tagId?` WHERE tags like '%${req.body.tagId}' OR tags like '${req.body.tagId}%'`:""
    const sql0 = "SELECT * FROM blogs " + condi +" limit ?,?";
    con(sql0,[(req.body.pageNum-1)*req.body.pageSize,req.body.pageSize],function(result){
      con(tagSql.query,[],function(tags){
        const resultM = getTagsObj(result,tags);
        con(sql.getTotal,[],function(result2){
          const obj = {
            total:JSON.parse(JSON.stringify(result2))[0]["count(*)"],
            data:resultM
          }
          res.send(obj)
        },function(err){util.res400(err,res)})
      })
    },function(err){util.res400(err,res)});
  },
  post: function(req, res) {
    const param = [req.body.title,req.body.content,req.body.tags,req.body.imgUrl,req.body.updateTime,req.body.remark,req.body.keyword];
    util.validateToken(function(){
      con(sql.insert,param,function(result) {
        res.send("操作成功");
    },function(err){util.res400(err,res)});
    },req,res)
  },
  patch: function(req, res) {
    const param = [req.body.title,req.body.content,req.body.tags,req.body.imgUrl,req.body.updateTime,req.body.remark];    
    con(sql.update,param,function() {res.send("操作成功");},function(err){util.res400(err,res)});
  },
  delete: function(req, res) {
    con(sql.delete,[req.params.id],function() {res.send("操作成功");},function(err){util.res400(err,res)});
  }
};
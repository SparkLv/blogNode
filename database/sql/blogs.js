module.exports = {
    query:'SELECT * FROM blogs order by id desc',
    queryById:'SELECT * FROM blogs WHERE id = ?',
    queryByPage:'SELECT * FROM blogs order by id desc limit ?,?',
    queryBlogsTag:'SELECT * FROM tags WHERE id IN( ? )',
    getTotal:'select count(*) from blogs',
    insert: "INSERT INTO blogs(title,content,tags,imgUrl,updateTime,remark,keyword) VALUES(?,?,?,?,?,?,?)",
    update:'UPDATE blogs SET title = ?,content = ?, tags = ?,imgUrl = ?,updateTime = ?,remark = ?,keyword=? WHERE id = ?',
    delete:'DELETE FROM blogs where id = ?'
  };  
module.exports = {
    query:'SELECT * FROM blogs',
    queryById:'SELECT * FROM blogs WHERE id = ?',
    queryByPage:'SELECT * FROM blogs limit ?,?',
    queryBlogsTag:'SELECT * FROM tags WHERE id IN( ? )',
    getTotal:'select count(*) from blogs',
    insert: "INSERT INTO blogs(title,content,tags,imgUrl,updateTime,remark) VALUES(?,?,?,?,?,?)",
    update:'UPDATE blogs SET title = ?,content = ?, tags = ?,imgUrl = ?,updateTime = ?,remark = ? WHERE id = ?',
    delete:'DELETE FROM blogs where id = ?'
  };  
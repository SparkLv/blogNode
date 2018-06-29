module.exports = {
    query:'SELECT * FROM blogs',
    insert: "INSERT INTO blogs(title,content,tags,imgUrl,updateTime,remark) VALUES(?,?,?,?,?,?)",
    update:'UPDATE blogs SET title = ?,content = ?, tags = ?,imgUrl = ?,updateTime = ?,remark = ? WHERE id = ?',
    delete:'DELETE FROM blogs where id = ?'
  };  
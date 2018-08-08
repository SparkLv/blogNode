module.exports = {
    query: "SELECT * FROM watch WHERE blog_id = ?",
    insert:"INSERT INTO watch(blog_id,num) VALUES(?,?)",
    update:'UPDATE watch SET num = ? WHERE blog_id = ?',
  };
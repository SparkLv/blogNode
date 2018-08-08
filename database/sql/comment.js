module.exports = {
  query: "SELECT * FROM comment WHERE blog_id = ?",
  insert:"INSERT INTO comment(blog_id,username,email,content,time) VALUES(?,?,?,?,?)"
};
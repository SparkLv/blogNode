module.exports = {
    query: "SELECT * FROM good WHERE blog_id = ?",
    insert:"INSERT INTO good(blog_id,good,bad) VALUES(?,?,?)",
    update:'UPDATE good SET good = ?,bad = ? WHERE blog_id = ?',
  };
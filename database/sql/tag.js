module.exports = {
  query:'SELECT * FROM tags',
  queryByCode:'SELECT * FROM tags WHERE code = ?',
  insert: "INSERT INTO tags(name,color,bgColor,code) VALUES(?,?,?,?)",
  insertRe:'INSERT INTO catatotag(cataId,tagId) VALUES(?,?)',
  update:'UPDATE tags SET name = ?,color = ?, bgColor = ?,code = ? WHERE id = ?',
  delete:'DELETE FROM tags where id = ?'
};

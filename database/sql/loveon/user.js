module.exports = {
    login: 'SELECT * FROM user where username = ?',
    register: "INSERT INTO user(username,password,sex,name,headImg) VALUES(?,?,?,?,?)"
};  
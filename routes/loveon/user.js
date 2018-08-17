const sql = require("../../database/sql/loveon/user.js");
const con = require("../../database/loveon.js");
const util = require("../util");

module.exports = {
    login: function (req, res) {
        con(sql.login, [req.body.username], function (result) {
            if (result.length) {
                if (req.body.password == result[0].password) {
                    res.send(util.resData('1', result[0], '登陆成功'))
                } else {
                    res.send(util.resData('0', null, '用户名或密码错误'))
                }
            } else {
                res.send(util.resData('0', null, '用户不存在'))
            }
        }, function (err) { util.res400(err, res) });
    },
    register: function (req, res) {
        const param = [req.body.username, req.body.password, req.body.sex, req.body.name, req.body.headImg];
        con(sql.login, [req.body.username], function (result0) {
            if (result0.length) {
                res.send(util.resData('2', null, '邮箱已存在'));
            } else {
                con(sql.register, param, function (result) {
                    res.send(util.resData('1', null, '注册成功'))
                }, function (err) { util.res400(err, res) });
            }
        }, function (err) { util.res400(err, res) })
    }
};
"use strict";
let router = require('express').Router();
let util = require('util');
let dbControl = require('db');
let db = new dbControl({});
router.post('/register', (req, res) => {
    util.log(req.body);
    res.send(JSON.stringify({result: '已经收到注册请求'}));
});
router.post('/login', (res, req) => {
    req.send('已经收到登陆请求');
});
module.exports = router;
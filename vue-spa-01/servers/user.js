"use strict";
let router = require('express').Router();
let util = require('util');
// let db = require('../config/db');
router.post('/register', (req, res) => {
  util.log(req.params);
  util.log(req.query);
  util.log(req.body);
  util.log(req.data);
  res.send(JSON.stringify({result: '已经收到注册请求'}));
});
router.post('/login', (res, req) => {
  req.send('已经收到登陆请求');
});
module.exports = router;

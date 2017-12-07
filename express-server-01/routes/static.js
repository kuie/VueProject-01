"use strict";
let router = require('express').Router();
let fs = require('fs');
let path = require('path');
let util = require('util');
router.all('/getProvinceList', (res, req) => {
    new Promise((resolve, reject) => {
        fs.readFile('staticFile/city.json', 'utf-8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    }).then(
        (data) => {
            req.send(data);
        },
        (err) => {
            util.log('↓↓↓↓↓↓↓↓↓获取省市信息列表错误↓↓↓↓↓↓↓↓↓');
            util.log(err);
            util.log('↑↑↑↑↑↑↑↑↑获取省市信息列表错误↑↑↑↑↑↑↑↑↑');
        });

});
module.exports = router;

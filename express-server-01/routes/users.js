"use strict";
let router = require('express').Router();
let util = require('util');
const mongoose = require('mongoose');
/**
 * mongoose实现promise使用的两个插件包
 * */
let assert = require('assert');
let Promise = require('mpromise');
mongoose.connect('mongodb://localhost:27017', {useMongoClient: true});
/*let db = mongoose.connection;
db.once('open', function () {
    console.log('已连接到数据库');
});*/
const Schema = mongoose.Schema;
/**
 * _id的值就是在这里产生的
 * */
// const ObjectId = Schema.Types.ObjectId;
let UserLoginForm = new Schema({
    u_email: {
        type: String,
        required: true//唯一值
    },
    u_pwd: String,
    u_tel: String,
    u_province: Number,
    u_city: Number,
    u_sex: Number,
    u_birth: {
        type: Date,
        max: Date.now
    },
    /**
     * 记录当前注册时间
     * */
    createTime: {
        type: Date,
        default: new Date()
    },
    updateTime: {
        type: Date,
        default: new Date()
    }
});
let User = mongoose.model('User', UserLoginForm);
router.post('/register', (req, res) => {
    /**
     * todo 我还是不懂这该死的promise数据库操作
     * 就不能直接用es6的么，会死么，真是的..蛋疼
     * */
    req.body.createTime = req.body.updateTime = new Date();
    util.log(req.body);
    res.send(JSON.stringify({result: '已经收到注册请求'}));
});
router.post('/login', (res, req) => {
    req.send('已经收到登陆请求');
});
module.exports = router;
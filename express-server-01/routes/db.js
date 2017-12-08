let util = require("util");
let MongoClient = require('mongoose').MongoClient;
let URL = "mongodb://localhost:27017";//访问数据库
/**
 * todo 模块方法变更
 * 彻底更改数据库操作方式
 * 变更为通过class方式进行集成的数据库控制方式
 * 数据库操作加入promise方法进行控制
 * 更好的解决异步读取数据的问题
 * */
module.exports = class DB {
    constructor(config) {

    }

    /**
     * 链接数据库
     * */
    connectDB(fun) {
        MongoClient.connect(URL, fun);
    }

    /**
     * 新增数据
     * */
    setData(Name, db, data) {
        /*访问user,vip,music,*/
        let devices = db.collection(Name);
        devices.insert(data, (error, result) => {
            if (error) {
                util.log('Error:' + error);
            } else {
                util.log(result);
            }
            db.close();
        });
    }

    /**
     * 读取数据
     * */
    getData(Name, db, whereStr, callback) {
        //连接到表
        let collection = db.collection(Name);
        collection.find(whereStr, (error, cursor) => {
            if (error) throw error;
            let searchData = [];
            cursor.each(function (error, doc) {
                if (doc) {
                    searchData.push(doc);
                } else {
                    if (searchData.length === 0) {
                        callback && callback(false);
                    } else {
                        callback && callback(searchData);
                    }
                }
            });
            db.close();
        });
    }

    /**
     * 更新数据
     * */
    upDate(Name, db, whereStr, upData, callback) {
        let devices = db.collection(Name);
        devices.update(whereStr, updateDat, function (error, result) {
            if (error) {
                util.log('Error:' + error);
            } else {
                util.log(result);
                callback && callback();
            }
            db.close();
        });
    }

    /**
     * 删除数据
     * */
    delData(Name, db, data) {
        let devices = db.collection(Name);
        devices.remove(data, function (error, result) {
            if (error) {
                util.log('Error:' + error);
            } else {
                util.log(result.result.n);
            }
            db.close();
        })
    }
};

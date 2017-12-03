let util = require("util");
let MongoClient = require('mongoose').MongoClient;
let URL = "mongodb://localhost:27017";//访问数据库

/**
 * 数据库操作
 * */
module.exports = {
  /**
   * 链接数据库
   * */
  connect(fun) {
    MongoClient.connect(URL, fun);
  },
  /**
   * 写入
   * */
  set(Name, db, data) {
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
  },
  /**
   * 查找
   * */
  get(Name, db, whereStr, callback) {
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
  },
  /**
   * 更改
   * */
  update(Name, db, whereStr, upData, callback) {
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
  },
  /**
   * 删除
   * */
  remove(Name, db, data) {
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

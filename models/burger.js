var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burger_name", function(res) {
      cb(res);
    });
  },

  insertOne: function(burgerName) {
    orm.insertOne("burgerName", function(res) {
      cb(res);
    });
  },

  updateOne: function(burgerName) {
    orm.updateOne("burgerName", function(res) {
      cb(res);
    });
  }
};

module.exports = burger;

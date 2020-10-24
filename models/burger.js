var orm = require('../config/orm.js');

//code that calls the orm functions
//delete console logs when finished :)

var burger = {
  all: function (cb) {
    orm.selectAll('burgers', function (res) {
      cb(res);
    });
  },

  create: function (columns, values, cb) {
    orm.insertOne('burgers', columns, values, function (res) {
      cb(res);
    });
  },
  update: function (columns, values, cb) {
    orm.updateOne('burgers', columns, values, function (res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;

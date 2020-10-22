var orm = require('../config/orm.js');

//code that calls the orm functions
//delete console logs when finished :)

var burger = {
  all: function (cb) {
    orm.selectall('burgers', function (res) {
      cb(res);
    });
  },

  create: function (cols, vals, cb) {
    orm.createOne('burgers', cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function (res) {
      cb(res);
    });
  },
};

module.exports = {
  burger,
};

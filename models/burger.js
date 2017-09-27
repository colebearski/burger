// import orm
var orm = require("../config/orm.js");

// call our orm functions
var burger = {

	selectAll: function(cb) {
		orm.selectAll(function (results) {
			cb(results);
		});
	},

	insertOne: function(burger_name, cb) {
		orm.insertOne(burger_name, function (results) {
			cb(results);
		});
	},

	updateOne: function(burger_id, cb) {
		orm.updateOne(burger_id, function (results) {
			cb(results);
		});
	}
};

module.exports = burger;
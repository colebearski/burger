// requrie connection.js
var connection = require("./connection.js");

// methods for mysql commands
var orm = {

	// selectAll()
	selectAll: function(cb) {

		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function (error, result) {
			console.log(result);
		});
	},

	// insertOne()
	insertOne: function(burger_name, cb) {

		var queryString = "INSERT INTO burgers SET ?", {
			burger_name: burger_name,
			devoured: false,
			date: timestamp
		},

		connection.query(queryString, function (error, result) {
			console.log(result);
		});

	},

	// updateOne()
	updateOne: function(burger_id, cb) {

		var queryString = "UPDATE burgers SET ? WHERE ?", {
			devoured: true,
			id: burger_id
		},

		connection.query(queryString, function (error, result) {
			console.log(result);
		})

	}
}

// export orm
module.exports = orm;
// requrie connection.js
var connection = require("./connection.js");

// methods for mysql commands
var orm = {

	// selectAll()
	selectAll: function(cb) {

		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function (error, result) {
			console.log(result);
			cb(result);
		});
	},

	// insertOne()
	insertOne: function(burger_name, cb) {
		connection.query("INSERT INTO burgers SET ?", {
			burger_name: burger_name,
			devoured: false,
			// date: timestamp
		}, function (error, result) {
			if (error) throw error;
			cb(result);
		});
	},

	//updateOne()
	updateOne: function(burger_id, cb) {

		// run my awesome sql
		connection.query("UPDATE burgers SET ? WHERE ?", 
			[{ devoured: true},
			{id: burger_id}], function (error, result) {
				if (error) throw error;
				cb(result);
			});
	}

};


// export orm
module.exports = orm;
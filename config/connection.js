// require mysql
var mysql = require("mysql");

// set up the connection
var connection = mysql.createConnection({
	port: 8889,
	host: "localhost",
	user: "root",
	password: "root",
	database: "burgers_db"
});

// connect to database
connection.connect(function (error) {
	if (error) {
		console.error("Error connection: " + error.stack);
		return;
	};
	console.log("Connected as ID " + connection.threadId);
});

// export connection ITS ASYNC!
module.exports = connection;
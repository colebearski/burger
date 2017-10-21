// require mysql
var mysql = require("mysql");

// JawsDB and MySQL connection
var connection;
if (process.ENV.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: "thh2lzgakldp794r.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		user: "ylr6bnmhferwnj9d",
		password: "qn902rscnpxdvgge",
		database: "burgers_db"
	});
};

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
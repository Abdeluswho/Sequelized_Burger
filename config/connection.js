//setting up MySQL connection
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL)
}else {
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "burgers_db"
});

} 

//Make the connection
connection.connect(function(err){
	if(err) throw err
	console.log("connected as id: " + connection.threadId);
});

//Export the established connection for ORM.js to use
module.exports = connection;
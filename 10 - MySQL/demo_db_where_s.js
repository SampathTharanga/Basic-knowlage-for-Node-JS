// You can also select the records that starts, includes, or ends with a given letter or phrase.
// Use the '%' wildcard to represent zero, one or multiple characters:
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function (err) {
    if(err) throw err;
    con.query("SELECT * FROM customers WHERE adress LIKE 'S%'", function (err, result) {
        if ( err) throw err;
        console.log(result);
    });
});